# poligonija_website

Files for Poligonija web page in hugo.

### Installation

#### Install Scoop package manager (https://scoop.sh/)

Installs in seconds
Make sure Powershell 3 (or later) and .NET Framework 4.5 (or later) are installed. Then run in powershell:

    iex (new-object net.webclient).downloadstring('https://get.scoop.sh')

Note: if you get an error you might need to change the execution policy (i.e. enable Powershell) with Set-ExecutionPolicy RemoteSigned -scope CurrentUser


#### Installing Hugo
If you are on macOS and using Homebrew, you can install Hugo with the following one-liner:

	brew install hugo

If you are on a Windows machine and use Scoop for package management, you can install Hugo with the following one-liner:
```sh
scoop install hugo
```

If you are on Debian or Ubuntu, you can install Hugo with the following one-liner:

    sudo apt-get install hugo
    
### Run

    hugo server
