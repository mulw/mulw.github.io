# The following code will add the Kali Linux computer's IP address to the list of allowed Netcat connections.powershell -NoProfile -WindowStyle Hidden -File <path to script.ps1>


$kaliLinuxIPAddress = "<kali linux ip address>"

# Check if Netcat is installed.
if (!(Test-Path "nc.exe")) {
  Write-Warning "Netcat is not installed. Please install it and run the script again."
} else {
  # Add the Kali Linux computer's IP address to the list of allowed Netcat connections.
  $allowedNetcatConnections = Get-ItemProperty -Path "HKCU:\Software\Microsoft\Netcat" -Name AllowedConnections | Select-Object -ExpandProperty Value
  $allowedNetcatConnections += $kaliLinuxIPAddress
  Set-ItemProperty -Path "HKCU:\Software\Microsoft\Netcat" -Name AllowedConnections -Value $allowedNetcatConnections
}
