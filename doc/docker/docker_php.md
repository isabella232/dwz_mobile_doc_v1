# 使用 Docker 构建 PHP 开发运行环境

- [查看 Docker PHP 镜像版本](https://hub.docker.com/_/php)，点击`Supported tags and respective`
- LAMP: Linux+Apache+MySQL+PHP
- LNMP: Linux+Nginx+MySQL+PHP

> ## docker-compose-dev.yml

```yaml
version: '3.8'
services:
  php-apache-dev:
    # build:
    #   context: .
    #   dockerfile: Dockerfile-php-dev # 开发环境暂时不使用Dockerfile
    container_name: php-apache-dev
    # image: php:7.3-apache
    image: jkdev/php:7.2-apache
    volumes:
      - ./php:/var/www/html # 宿主目录:容器目录
      - ./php-apache-dev/vhosts.conf:/etc/apache2/sites-enabled/000-default.conf # apache 配制文件
      - ./php-apache-dev/php.ini:/usr/local/etc/php/php.ini # apache 配制文件
    ports:
      - 1080:80 # 宿主端口:容器端口
```

> ## 启动开发环境

```sh
cd ~/wrokspace
docker-compose -f "docker-compose-dev.yml" up -d --build

docker exec php-apache-dev a2enmod rewrite # 支持.htaccess
docker exec php-apache-dev php -m | grep gd # 查看GD库是否安装
docker exec php-apache-dev apache2ctl restart
```

### apache vhosts 配制

```conf
<VirtualHost *:80>
    # The ServerName directive sets the request scheme, hostname and port that
    # the server uses to identify itself. This is used when creating
    # redirection URLs. In the context of virtual hosts, the ServerName
    # specifies what hostname must appear in the request's Host: header to
    # match this virtual host. For the default virtual host (this file) this
    # value is not decisive as it is used as a last resort host regardless.
    # However, you must set it for any further virtual host explicitly.
    #ServerName www.example.com

    ServerAdmin z@j-ui.com
    DocumentRoot /var/www/html

    # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
    # error, crit, alert, emerg.
    # It is also possible to configure the loglevel for particular
    # modules, e.g.
    #LogLevel info ssl:warn

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    # For most configuration files from conf-available/, which are
    # enabled or disabled at a global level, it is possible to
    # include a line for only one particular virtual host. For example the
    # following line enables the CGI configuration for this host only
    # after it has been globally disabled with "a2disconf".
    #Include conf-available/serve-cgi-bin.conf

    <Directory "/var/www/html">
        Options Indexes FollowSymLinks Includes
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### php.ini 配制

验证码图片乱码问题修改 /usr/local/etc/php/php.ini

```conf
output_buffering=4096
```

### Docker 容器内连接宿主机的 Mysql

- 不能用 localhost 和 127.0.0.1
- 可以使用局域网 IP（连接不同的路由器 IP 会变，每次改配制文件比较麻烦）
- linux 系统 ifconfig 查看虚拟网卡 docker0 的 IP，直接使用这个 IP 连接宿主机 mysql
- macos 系统配制一块静态网卡（bridge0 应该是 macos 系统，docker 在运行时就建立了虚拟网卡，但是没有 IP）

```sh
sudo ifconfig en0 alias 192.168.32.1/24 up # en0 增加IP
sudo ifconfig en0 -alias 192.168.32.1 # en0 删除IP
```

> ## 访问

```
http://localhost:1080
```

> ## 关闭开发环境

```sh
docker-compose -f "docker-compose-dev.yml" down
```

> ## 启动生产环境

```sh
docker-compose -f "docker-compose.yml" up -d --build
```

> ## 关闭生产环境

```sh
docker-compose -f "docker-compose.yml" down
```

> ## docker 常用命令

### 删除容器

```sh
docker stop php-apache-dev
docker rm php-apache-dev
```

### 查看镜像

```sh
docker images
docker ps
```

### 执行 docker 容器命令

```sh
docker exec php-apache-dev ls /var/www/html
```
