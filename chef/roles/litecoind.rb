name "litecoind"
run_list(
  "recipe[snow::common]",
    "recipe[snow::aptupdate]",
    "recipe[snow::crontp]",
    "recipe[postfix]",
    "recipe[monit]",
    "recipe[snow::litecoind]"
)
