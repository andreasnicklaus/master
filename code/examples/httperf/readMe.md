# httperf

- [Github Repo](https://github.com/httperf/httperf)
- [Command Manual](https://manpages.debian.org/testing/httperf/httperf.1.en.html)


```cmd
docker run -it --name httperf-test --entrypoint bash debian

docker start httperf-test
docker exec -it httperf-test bash
```

```bash
httperf --server leto.andreasnicklaus.de --ssl --num-conns 100 --timeout 1
```