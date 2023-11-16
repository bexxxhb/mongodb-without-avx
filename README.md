# MongoDB without AVX

*MongoDB versions 5.0+ require a CPU with AVX capabilities. Systems using modern but lower-end CPU´s like Intel Celeron do not support this and cannot use more recent MongoDB versions because of that. Projects like Graylog have started to require MongoDB 5+, making it impossible to use recent versions of Graylog on such CPU´s.*

*This is MongoDB built from source with AVX requirements patched out. Tested on Intel Celeron J4105 system.*

# Not intended for production. Use at your own risk.

Docker images for `amd64` platform are provided for versions `6.2.1` and `5.0.20`. The `latest` tag equals `6.2.1`.

Pull from the [Docker Hub repo](https://hub.docker.com/r/l33tlamer/mongodb-without-avx) with `docker pull docker.io/l33tlamer/mongodb-without-avx:latest`

Refer to the MongoDB documentation for usage.

````
mongod --version

db version v6.2.1
Build Info: {
    "version": "6.2.1",
    "gitVersion": "nogitversion",
    "openSSLVersion": "OpenSSL 1.1.1w  11 Sep 2023",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}
````

*The only purpose of this repo is to provide a Docker image.*  
*For details on building MongoDB from source without AVX, please refer to the original repo [rnsc/mongodb-without-avx](https://github.com/rnsc/mongodb-without-avx).*
