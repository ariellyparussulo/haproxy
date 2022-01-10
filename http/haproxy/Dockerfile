FROM haproxytech/haproxy-alpine:2.5

LABEL name="haproxy"
LABEL version="2.5"

COPY haproxy.cfg /usr/local/etc/haproxy

EXPOSE 80
EXPOSE 8404

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["haproxy", "-f", "/usr/local/etc/haproxy/haproxy.cfg"]