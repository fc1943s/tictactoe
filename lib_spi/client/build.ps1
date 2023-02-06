. "$PSScriptRoot/../cli/build.ps1"

dotnet fable `
    "$PSScriptRoot" `
    --optimize `
    --lang rs `
    --extension .rs `
    --outDir "$PSScriptRoot"

. "$PSScriptRoot/../../target/release/cli" PostFsxRsBuild -- --rs-path="$PSScriptRoot/client.rs"

cargo fmt

~/.cargo/bin/wasm-pack build --target web --dev "$PSScriptRoot"
