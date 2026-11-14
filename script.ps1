$folders = @("include", "src", "wrappers") 
$total = 0

foreach  ($folder in $folders){

    if (Test-Path $folder) {

        $size = (Get-ChildItem $folder -Recurse -File | Measure-Object Length -Sum).Sum

        $sizeMB = [math]::Round($size / 1MB, 3)

        $total += $size

        Write-Host "$folder : $sizeMB MB"
    }
}

Write-Host "------------ Total ------------"
Write-Host "Total: $([math]::Round($total / 1MB, 3)) MB"
