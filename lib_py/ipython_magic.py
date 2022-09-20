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
    cache_imports, cache_exports = split_imports(_spiral_cache[arg])

    def cwpath(*arg): return os.path.abspath(os.path.join(os.getcwd(), '..', *arg))

    if cell.strip() == '' and arg == '':
        cell = util.read_file(cwpath('main.spi'))

    cell_imports, cell_exports = split_imports(cell)
    cell_exports = '\n'.join(cell_exports).strip('\n').split('\n')

    if arg == 'run':
        cell_imports = ['open lib_spi.util', 'open lib_spi.console_fsx'] + cell_imports
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

    if arg in ['spi', 'spir']:
        spi_path = cwpath('lib_spi', f'{_notebook_name}.{arg}')
    else:
        spi_path = cwpath('main.spi')

    _spiral_cache[arg] = new_code_spi

    if test:
        return new_code_spi
    else:
        old_code_spi = util.read_file(spi_path)
        if new_code_spi != old_code_spi:
            if arg in ['run', '']:
                shutil.copyfile(cwpath('main.spi'), cwpath('main.spi.tmp'))
                shutil.copyfile(cwpath('main.fsx'), cwpath('main.fsx.tmp'))

            try:
                util.write_file(spi_path, new_code_spi)

                if arg in ['run', '']:
                    fsx_path = cwpath("lib_fsx", "_ipython_spi.fsx" if arg == 'run' else f'{_notebook_name}_spi.fsx')
                    util.write_file(fsx_path, '')

                    run_node_output = util.run_node(
                        '\n'.join([
                            f'import * as spiral_api from "../lib_ts/spiral_api"',
                            f'await spiral_api.spiToFsx("", "{fsx_path}")'
                        ]),
                        timeout=int(get_arg(1, 10))
                    ).splitlines()

                    new_code_fsx = ''
                    start = time.time()
                    while new_code_fsx == '' and time.time() - start < 10:
                        time.sleep(0.2)
                        new_code_fsx = util.read_file(fsx_path).strip(" \n")

                    if arg == 'run':
                        util.write_file(fsx_path, '')

                    print({
                        'run_node_output': run_node_output,
                        'fsx_path': fsx_path,
                        'len(new_code_fsx)': len(new_code_fsx),
                        'new_code_fsx[:100]': new_code_fsx[:100],
                    })

            except Exception as e:
                print(f'ipython_magic.spiral() error. new_code_spi={new_code_spi}')
                _spiral_cache = last_spiral_cache
                raise e
            finally:
                if arg in ['run', '']:
                    os.rename(cwpath('main.spi.tmp'), cwpath('main.spi'))
                    os.rename(cwpath('main.fsx.tmp'), cwpath('main.fsx'))

        return spi_path

@register_cell_magic
def spi(arg, cell, test=False):
    return spiral('spi', cell, test)

@register_cell_magic
def spir(arg, cell, test=False):
    return spiral('spir', cell, test)
