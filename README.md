# WeNerd

Projeto de e-commerce - Disciplina de Programação Web 1

Os requisitos do projeto podem ser encontrado em:
[https://docs.google.com/document/d/1-kfOxzZj2xKC16qB3Q48GAwfXOQFvZy2LFqz6oXoP0A/edit](https://docs.google.com/document/d/1-kfOxzZj2xKC16qB3Q48GAwfXOQFvZy2LFqz6oXoP0A/edit)

#Comandos do Git:

> Todos os campos com <> devem ser substituídos, incluindo o <>

Configuração inicial:

    git config --global user.name "<Seu nome>"
    git config --global user.email "<seu e-mail>"

Configurar SSH:

    -Windows:
    
        ssh-keygen -t ed25519 -C "<seu email>"
        cat ~/.ssh/id_ed25519.pub | clip
        
    -Linux:
    
        ssh-keygen -t ed25519 -C "<seu email>"
        xclip -sel clip < ~/.ssh/id_ed25519.pub
        
    -Colar a SSH no campo de "Adicionar SSH" no git
        
Clonar repositório:

    git clone origin <Lntk do repositório>
    
Para baixar as alterações salvas no servidor:

    git pull
    
Caso o git pull não seja suficiente para exibir as mudanças:

    git fetch
    
Criar nova branch:

    git checkout -b <Nome da nova branch>
    
Trocar para uma branch já existente:
    
    git checkout <Nome de branch>

Salvar alterações para enviar pro servidor:

    git add <Nome do arquivo>
    
    ou para adicionar todos os arquivos da pasta do projeto.
    
    git add .
    
Criar commit:

    git commit -m "<Mensagem do commit>"
    
Enviar mudanças para o servidor:

    git push