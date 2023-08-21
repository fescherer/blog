export function LogoIcon({ color }: { color?: string }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={202}
    height={38}
    fill="none"
  >
    <path
      fill={color}
      d="M10.276 24.101H7.599V9.13h10.735v2.34h-8.058v3.67h6.157v2.207h-6.157v6.755ZM23.184 21.92h8.326v2.181H20.48V9.13h10.763v2.34h-8.059v3.936h6.185v2.234h-6.185v4.281ZM34.16 24.101V9.13h2.731v12.658h7.443v2.314H34.16ZM53.375 21.787v2.314h-6.72v-2.314h2.035V11.47h-2.034v-2.34h6.72v2.34h-1.982v10.318h1.981ZM59.424 24.101h-2.73V9.13h6.05c1.677 0 2.98.416 3.908 1.25.928.833 1.392 2.091 1.392 3.776 0 1.471-.481 2.624-1.445 3.457-.946.833-2.231 1.25-3.855 1.25h-3.32v5.24Zm2.945-12.765h-2.945v5.531h2.945c.964 0 1.74-.23 2.329-.691.589-.461.884-1.152.884-2.074 0-.94-.295-1.632-.884-2.075-.571-.46-1.347-.691-2.33-.691ZM72.624 21.92h8.326v2.181H69.92V9.13h10.762v2.34h-8.058v3.936h6.184v2.234h-6.184v4.281ZM95.132 24.394c-.82 0-1.633-.098-2.436-.293a7.208 7.208 0 0 1-2.142-.904 4.52 4.52 0 0 1-1.526-1.596c-.374-.674-.57-1.48-.589-2.42h2.758c0 .089.036.284.107.585.071.284.232.594.482.931.268.337.678.63 1.231.878.572.248 1.34.372 2.303.372 1.053 0 1.83-.195 2.329-.585.518-.39.776-.807.776-1.25 0-.496-.178-.886-.535-1.17-.34-.302-.803-.54-1.392-.718a19.14 19.14 0 0 0-1.901-.532 50.647 50.647 0 0 1-2.061-.532 8.948 8.948 0 0 1-1.874-.824 3.982 3.982 0 0 1-1.312-1.357c-.322-.55-.464-1.25-.429-2.1.09-1.26.696-2.243 1.82-2.953 1.125-.709 2.616-1.063 4.472-1.063 1.07 0 2.061.195 2.972.585.928.372 1.668.94 2.222 1.702.571.744.856 1.702.856 2.872h-2.65c0-.55-.125-.993-.375-1.33a2.335 2.335 0 0 0-.964-.798 3.532 3.532 0 0 0-1.204-.372 7.126 7.126 0 0 0-1.152-.106c-.892 0-1.633.15-2.222.452-.57.301-.856.744-.856 1.33-.018.496.151.895.508 1.196.357.302.83.54 1.42.718.588.178 1.23.337 1.927.479.696.142 1.392.32 2.088.532.696.195 1.33.46 1.9.798.572.319 1.018.762 1.339 1.33.322.549.455 1.267.402 2.153-.071 1.26-.687 2.243-1.847 2.953-1.16.69-2.642 1.037-4.445 1.037ZM110.652 24.367c-1.41 0-2.686-.284-3.828-.85-1.143-.586-2.053-1.446-2.731-2.58-.661-1.135-.991-2.554-.991-4.256.018-1.666.357-3.085 1.018-4.255.66-1.17 1.561-2.056 2.704-2.66 1.142-.602 2.445-.903 3.908-.903 1.392 0 2.579.248 3.561.744.982.497 1.767 1.17 2.356 2.021a6.827 6.827 0 0 1 1.178 2.873h-2.811c-.125-.78-.42-1.392-.884-1.835a3.547 3.547 0 0 0-1.579-.958 5.922 5.922 0 0 0-1.821-.292c-1.588 0-2.811.443-3.668 1.33-.838.886-1.258 2.136-1.258 3.75 0 1.719.411 3.04 1.232 3.962.839.922 2.052 1.383 3.641 1.383.66 0 1.303-.098 1.927-.293a3.997 3.997 0 0 0 1.607-1.01c.446-.48.731-1.117.856-1.915h2.838a7.334 7.334 0 0 1-1.205 2.952c-.589.85-1.392 1.533-2.409 2.047-1 .497-2.213.745-3.641.745ZM123.009 24.101h-2.758V9.13h2.758v6.302h7.148V9.13h2.731V24.1h-2.731v-6.569h-7.148v6.57ZM138.561 21.92h8.326v2.181h-11.03V9.13h10.762v2.34h-8.058v3.936h6.184v2.234h-6.184v4.281ZM149.349 24.101V9.13h5.542c1.945 0 3.462.328 4.551.984 1.089.638 1.633 1.773 1.633 3.404 0 1.223-.294 2.216-.883 2.978-.589.745-1.437 1.117-2.544 1.117.625 0 1.089.142 1.393.426.321.266.544.602.669 1.01.125.408.214.834.268 1.277.053.443.116.842.187 1.197.089.336.25.576.482.718.25.141.634.115 1.151-.08v1.569c-.339.284-.741.47-1.205.558-.464.107-.919.08-1.365-.08-.446-.16-.821-.47-1.124-.93-.304-.479-.456-1.144-.456-1.995 0-.78-.044-1.4-.133-1.861-.09-.48-.313-.834-.67-1.064-.357-.248-.91-.4-1.66-.452-.749-.071-1.784-.071-3.105 0V24.1h-2.731Zm2.731-8.164h2.704c.874 0 1.597-.036 2.168-.107.572-.088.991-.283 1.259-.585.285-.319.428-.824.428-1.516 0-.762-.17-1.312-.509-1.648-.339-.337-.838-.541-1.499-.612-.642-.089-1.437-.133-2.383-.133h-2.168v4.6ZM166.823 21.92h8.326v2.181h-11.03V9.13h10.762v2.34h-8.058v3.936h6.184v2.234h-6.184v4.281ZM177.611 24.101V9.13h5.542c1.946 0 3.463.328 4.552.984 1.088.638 1.633 1.773 1.633 3.404 0 1.223-.295 2.216-.884 2.978-.589.745-1.437 1.117-2.543 1.117.625 0 1.089.142 1.392.426.321.266.544.602.669 1.01.125.408.214.834.268 1.277.054.443.116.842.187 1.197.09.336.25.576.482.718.25.141.634.115 1.152-.08v1.569a2.61 2.61 0 0 1-1.205.558c-.464.107-.919.08-1.366-.08-.446-.16-.821-.47-1.124-.93-.303-.479-.455-1.144-.455-1.995 0-.78-.045-1.4-.134-1.861-.089-.48-.312-.834-.669-1.064-.357-.248-.911-.4-1.66-.452-.75-.071-1.785-.071-3.106 0V24.1h-2.731Zm2.731-8.164h2.704c.875 0 1.598-.036 2.169-.107.571-.088.99-.283 1.258-.585.286-.319.428-.824.428-1.516 0-.762-.169-1.312-.508-1.648-.339-.337-.839-.541-1.499-.612-.643-.089-1.437-.133-2.383-.133h-2.169v4.6Z"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M197.655 34.074V3.324h3.347v30.75h-3.347ZM137.627 30.75h60.028v3.324h-60.028V30.75Z"
      clipRule="evenodd"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M.002 0h201v3.324H3.349v30.75H.002V0Z"
      clipRule="evenodd"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M63.377 34.074H3.349V30.75h60.027v3.324Z"
      clipRule="evenodd"
    />
    <path
      fill={color}
      d="M75.817 34.064c0 .984-.196 1.75-.589 2.3-.383.541-.928.918-1.633 1.13-.705.214-1.535.32-2.49.32H69.03v-7.486h2.075c.955 0 1.785.141 2.49.425.705.275 1.25.687 1.633 1.237.393.55.59 1.24.59 2.074Zm-5.434 2.633h1.11c.59 0 1.098-.067 1.526-.2.429-.141.76-.403.991-.784.232-.381.348-.935.348-1.662 0-.86-.259-1.498-.776-1.915-.509-.426-1.205-.638-2.088-.638h-1.112v5.199ZM78.367 36.724h4.163v1.09h-5.516v-7.486h5.382v1.17h-4.03v1.968h3.093v1.117h-3.093v2.14ZM88.86 30.328h1.5l-2.49 7.486h-2.275l-2.49-7.486h1.486l2.128 6.914 2.142-6.914ZM92.746 36.724h4.163v1.09h-5.515v-7.486h5.381v1.17h-4.029v1.968h3.092v1.117h-3.092v2.14ZM98.234 37.814v-7.486H99.6v6.329h3.722v1.157h-5.087ZM107.628 38c-1.213 0-2.141-.35-2.784-1.05-.642-.71-.964-1.663-.964-2.86 0-.788.139-1.47.415-2.047a3.02 3.02 0 0 1 1.245-1.356c.562-.328 1.258-.492 2.088-.492 1.232 0 2.164.354 2.798 1.063.634.7.95 1.645.95 2.833 0 .77-.142 1.453-.428 2.047a3.174 3.174 0 0 1-1.258 1.37c-.553.328-1.241.492-2.062.492Zm-.013-1.303c.803 0 1.406-.248 1.807-.745.411-.496.616-1.117.616-1.861 0-.506-.089-.953-.268-1.343a2.051 2.051 0 0 0-.803-.931c-.357-.23-.808-.346-1.352-.346-.785 0-1.383.24-1.794.718-.41.479-.616 1.113-.616 1.902 0 .487.085.93.255 1.33.178.39.446.7.803.93.357.23.808.346 1.352.346ZM113.964 37.814h-1.365v-7.486h3.025c.839 0 1.49.208 1.954.625.464.416.696 1.046.696 1.888 0 .736-.241 1.312-.723 1.728-.472.417-1.115.625-1.927.625h-1.66v2.62Zm1.473-6.383h-1.473v2.766h1.473c.481 0 .87-.115 1.164-.346.295-.23.442-.576.442-1.037 0-.47-.147-.816-.442-1.037-.285-.23-.674-.346-1.164-.346ZM120.564 36.724h4.163v1.09h-5.515v-7.486h5.381v1.17h-4.029v1.968h3.092v1.117h-3.092v2.14ZM125.958 37.814v-7.486h2.771c.973 0 1.731.163 2.276.492.544.319.816.886.816 1.702 0 .611-.147 1.108-.441 1.489-.295.372-.719.558-1.272.558.312 0 .544.071.696.213.161.133.272.302.335.505.062.204.107.417.134.639.026.221.058.42.093.598.045.168.125.288.241.359.125.071.317.058.576-.04v.785c-.17.142-.371.235-.603.279a1.13 1.13 0 0 1-1.245-.505c-.151-.24-.227-.572-.227-.998 0-.39-.022-.7-.067-.93-.045-.24-.156-.417-.335-.532-.178-.124-.455-.2-.83-.226-.374-.036-.892-.036-1.552 0v3.098h-1.366Zm1.366-4.082h1.352c.437 0 .798-.018 1.084-.054.285-.044.495-.141.629-.292.143-.16.214-.412.214-.758 0-.381-.085-.656-.254-.825-.17-.168-.42-.27-.75-.305a8.93 8.93 0 0 0-1.191-.067h-1.084v2.3Z"
    />
  </svg>
  )
}
