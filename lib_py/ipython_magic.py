# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/02_ipython_magic.ipynb (unless otherwise specified).

__all__ = ['node', 'spiral', 'spi', 'spir']

# Cell

import sys
sys.path.append('..')
import lib_py.util as util
from IPython.core.magic import register_cell_magic

_node_cache = ''
_notebook_name = None

@register_cell_magic
def node(arg, cell, test=False):
    global _node_cache
    global _notebook_name

    ipython_node_path = '_ipython_node.ts'

    def split_imports(code): return util.list_partition(code.splitlines(), lambda line: line.startswith('import '))
    cache_imports, cache_exports = split_imports(_node_cache)
    cell_imports, cell_exports = split_imports(cell)
    cell_exports = '\n'.join(cell_exports).strip('\n').split('\n')

    if arg == 'run':
        ts_imports = cache_imports
        ipython_imports = cache_imports + cell_imports

        ts_exports = cache_exports
        ipython_exports = cache_exports \
            + ([] if cell_exports == ['']
            else (['', '// cell', 'var run = async (arg: string) => {'] + cell_exports + ['}', f'await run("{arg}")']))
    elif arg == 'export':
        ts_imports = cache_imports + cell_imports
        ipython_imports = ts_imports

        ts_exports = cache_exports + ([] if cell_exports == [''] else (['', '// cell'] + cell_exports))
        ipython_exports = ts_exports

    def join_imports(imports, exports):
        return ''.join([
            '\n'.join(list(dict.fromkeys(imports))),
            '' if len(imports) == 0 or len(exports) == 0 else '\n\n\n',
            '\n'.join(exports).strip('\n') + '\n'
        ])
    new_code_ts = join_imports(ts_imports, ts_exports)
    new_code_ipython = join_imports(ipython_imports, ipython_exports)

    def cwpath(arg): return os.path.abspath(os.path.join(os.getcwd(), '..', 'lib_ts', arg))

    util.write_file(cwpath(ipython_node_path), new_code_ipython)

    result = util.run_node(cwpath(ipython_node_path)).splitlines() if arg == 'run' else []

    _node_cache = new_code_ts

    if test:
        return result, new_code_ts, new_code_ipython
    else:
        if new_code_ts != '\n':
            if _notebook_name is None:
                _notebook_name = util.get_notebook_name()

            ts_node_path = cwpath(f'{_notebook_name}.ts')

            util.write_file(ts_node_path, new_code_ts)

            return result if arg == 'run' else ts_node_path

        return result


# Cell

import shutil
import os
import time
from IPython.core.magic import register_cell_magic

def _get_spiral_cache_empty(): return {'spi': '', 'spir': '', 'run': '', '': ''}
_spiral_cache = _get_spiral_cache_empty()

@register_cell_magic
def spiral(arg, cell, test=False):
    global _spiral_cache
    global _notebook_name

    last_spiral_cache = _spiral_cache

    args = arg.split(' ')
    def get_arg(i, d=''): return next(iter(args[i:i+1]), d)
    arg = args[0]

    def split_imports(code): return util.list_partition(code.splitlines(), lambda line: line.startswith('open '))
    cache_imports, cache_exports = split_imports(_spiral_cache.get(arg, ''))

    def cwpath(*arg): return os.path.abspath(os.path.join(os.getcwd(), '..', *arg))

    if arg not in ['spi', 'spir', 'run'] and not arg.startswith('.'):
        raise Exception('invalid arg: ' + arg)

    file_arg = ''
    if arg.startswith('.'):
        file_arg = arg

    if arg.startswith('.'):
        new_code_spi = util.read_file(arg)
    else:
        cell_imports, cell_exports = split_imports(cell)
        cell_exports = '\n'.join(cell_exports).strip('\n').split('\n')

        if arg == 'run':
            cell_imports = ['open console_fsx'] + cell_imports
            cell_exports = ['inl main () : () = '] + list(map(lambda l: f'    {l}', cell_exports))

        spi_imports = cache_imports + cell_imports
        spi_exports = cache_exports + ([] if cell_exports == [''] else (['', '// cell'] + cell_exports))

        def join_imports(imports, exports):
            return ''.join([
                '\n'.join(list(dict.fromkeys(imports))),
                '' if len(imports) == 0 or len(exports) == 0 else '\n\n\n',
                '\n'.join(exports).strip('\n') + '\n'
            ])
        new_code_spi = join_imports(spi_imports, spi_exports)

    if _notebook_name is None:
        _notebook_name = util.get_notebook_name()

    spi_path = cwpath(
        'lib_spi',
        'ipython.spi' if arg == 'run' else f'{_notebook_name}.{arg}'
    ) if arg in ['spi', 'spir', 'run'] else arg

    if not os.path.exists(spi_path):
        util.write_file(spi_path, '')

    _spiral_cache[arg] = new_code_spi

    if test:
        return new_code_spi
    else:
        def build():
            fsx_path = cwpath(
                "lib_spi",
                "ipython.fsx" if arg == 'run' else f'{_notebook_name}_spi.fsx'
            ) if arg in ['spi', 'spir', 'run'] else arg.replace('.spir', '.spi').replace('.spi', '.fsx')
            util.write_file(fsx_path, '')

            timeout_seconds = 20
            # run_node_output = util.run_node(
            #     '\n'.join([
            #         f'import * as spiral_api from "../lib_ts/spiral_api"',
            #         f'await spiral_api.spiToFsx("{spi_path}", "{fsx_path}")'
            #     ]),
            #     timeout=int(get_arg(1, timeout_seconds))
            # ).splitlines()
            run_build_output = util.run(
                f"cd ../lib_spi/supervisor && cargo build --release && ./target/release/supervisor --spi-path=\"{spi_path}\" --fsx-path=\"{fsx_path}\""
            ).splitlines()

            new_code_fsx = ''
            start = time.time()

            def read_fsx():
                time.sleep(0.5)
                return util.read_file(fsx_path).strip(" \n")

            while new_code_fsx == '' and time.time() - start < timeout_seconds:
                new_code_fsx = read_fsx()
            new_code_fsx = read_fsx()

            print({
                'run_build_output': run_build_output,
                'fsx_path': fsx_path,
                'len(new_code_fsx)': len(new_code_fsx),
                'new_code_fsx[:100]': new_code_fsx[:100],
            })


        try:
            if arg.startswith('.'):
                build()
            else:
                old_code_spi = util.read_file(spi_path)
                if new_code_spi != old_code_spi:
                    util.write_file(spi_path, new_code_spi)

                    if arg in ['run', file_arg]:
                        build()

                        if arg == 'run':
                            util.write_file(spi_path, '')
                            util.write_file(fsx_path, '')

        except Exception as e:
            print(f'ipython_magic.spiral() error. new_code_spi={new_code_spi[:100]}')
            _spiral_cache = last_spiral_cache
            raise e

        return spi_path

@register_cell_magic
def spi(arg, cell, test=False):
    return spiral('spi', cell, test)

@register_cell_magic
def spir(arg, cell, test=False):
    return spiral('spir', cell, test)
