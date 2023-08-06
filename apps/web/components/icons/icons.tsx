type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="806.000000pt"
      // height="806.000000pt"
      viewBox="0 0 806.000000 806.000000"
      fill="currentColor"
      width="40px"
      height="40px"
      {...props}>
      <path
        d="M780 8045c-206-38-372-127-517-278-121-126-199-270-240-443-17-76-18-201-18-3294S6 812 23 736c44-184 121-322 256-457S552 67 736 23C812 6 937 5 4030 5s3218 1 3294 18c184 44 322 121 457 256s212 273 256 457c17 76 18 201 18 3294s-1 3218-18 3294c-44 183-121 322-256 457-132 132-258 204-451 256-61 17-246 18-3270 19-2664 2-3218 0-3280-11zm2870-2372v-927l59 90c135 205 333 345 570 404 730 182 1376-141 1620-809 38-103 68-250 81-386 6-66 10-545 10-1187V1780h-890v973c0 930-4 1077-31 1202-55 259-215 443-454 522-72 24-95 27-235 27-145 1-161-1-243-28-201-66-360-221-428-420-59-172-59-165-59-1267V1780h-890v4820h890v-927zm-1190-803v-420h-122c-268 0-465-73-651-240-88-79-175-219-214-340-47-151-46-128-50-1137l-4-953H530v3430h860l1-327v-328l39 108c90 253 221 410 434 522 137 72 270 102 464 104l132 1v-420zm4698-2053c92-32 155-73 224-145 72-75 102-125 134-219 33-96 37-232 10-332-50-191-213-355-406-406-71-19-248-19-320 0-197 52-363 218-415 415-19 72-19 217 1 294 50 195 229 365 434 411 96 22 245 14 338-18z"
        transform="matrix(.1 0 0 -.1 0 806)"
      />
    </svg>
  ),
  largeLogo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="806.000000pt"
      // height="806.000000pt"
      viewBox="0 0 806.000000 806.000000"
      fill="currentColor"
      width="60px"
      height="60px"
      {...props}>
      <path
        d="M780 8045c-206-38-372-127-517-278-121-126-199-270-240-443-17-76-18-201-18-3294S6 812 23 736c44-184 121-322 256-457S552 67 736 23C812 6 937 5 4030 5s3218 1 3294 18c184 44 322 121 457 256s212 273 256 457c17 76 18 201 18 3294s-1 3218-18 3294c-44 183-121 322-256 457-132 132-258 204-451 256-61 17-246 18-3270 19-2664 2-3218 0-3280-11zm2870-2372v-927l59 90c135 205 333 345 570 404 730 182 1376-141 1620-809 38-103 68-250 81-386 6-66 10-545 10-1187V1780h-890v973c0 930-4 1077-31 1202-55 259-215 443-454 522-72 24-95 27-235 27-145 1-161-1-243-28-201-66-360-221-428-420-59-172-59-165-59-1267V1780h-890v4820h890v-927zm-1190-803v-420h-122c-268 0-465-73-651-240-88-79-175-219-214-340-47-151-46-128-50-1137l-4-953H530v3430h860l1-327v-328l39 108c90 253 221 410 434 522 137 72 270 102 464 104l132 1v-420zm4698-2053c92-32 155-73 224-145 72-75 102-125 134-219 33-96 37-232 10-332-50-191-213-355-406-406-71-19-248-19-320 0-197 52-363 218-415 415-19 72-19 217 1 294 50 195 229 365 434 411 96 22 245 14 338-18z"
        transform="matrix(.1 0 0 -.1 0 806)"
      />
    </svg>
  ),
  oldlogo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="140px"
      height="103px"
      viewBox="0 0 800 592"
      xmlSpace="preserve"
      fill="currentColor"
      {...props}>
      <path
        opacity={1}
        d="M374 454.322c-22.833-.002-45.167.045-67.5-.02-27.5-.08-49.113-18.524-53.59-45.682-.296-1.793-.242-3.655-.242-5.484-.01-68.333-.024-136.666.003-205 .01-26.416 23.793-50.412 50.25-50.448 65.333-.088 130.666-.083 196 .014 26.294.04 50.366 24.185 50.393 50.46.069 68.166.036 136.332.021 204.499-.005 24.122-18.696 46.372-42.426 50.602-4.272.762-8.56 1.09-12.91 1.085-39.833-.049-79.666-.028-120-.026m27.766-203.104c-4.787 2.449-7.775 6.876-12.113 10.495v-5.344c-.002-15.164-.158-30.33.086-45.49.075-4.651-1.867-6.381-6.1-6.397-5.165-.019-10.33-.003-15.495.002-4.281.004-6.061 1.77-5.97 6.409.29 14.658.12 29.326.119 43.99-.001 31.828.107 63.656-.126 95.482-.038 5.174 1.57 6.785 6.556 6.368 4.634-.387 9.325-.073 13.99-.083 6.907-.015 6.928-.02 6.935-6.917.02-19.163-.11-38.327.076-57.489.11-11.45 7.447-19.912 18.623-22.194 10.413-2.125 21.112 3.025 25.343 12.39 2.01 4.45 2.633 9.244 2.633 14.115 0 18.163.123 36.328-.076 54.49-.049 4.423 1.415 5.935 5.774 5.667 5.146-.317 10.334-.272 15.49-.052 4.58.196 6.347-1.23 6.266-6.231-.306-18.992-.159-37.992-.098-56.988.014-4.343-.247-8.623-1.065-12.896-6.192-32.354-37.96-40.91-60.848-29.327M291.993 301.5c-.023 16.495.05 32.99-.134 49.483-.05 4.352 1.487 5.977 5.848 5.705 4.813-.3 9.68-.343 14.485.013 4.973.368 6.723-1.303 6.63-6.453-.29-16.156-.205-32.321-.08-48.482.138-18.016 10.449-28.876 28.468-30.04 3.127-.202 4.559-1.288 4.484-4.498-.113-4.829.015-9.663-.032-14.494-.054-5.478-1.376-6.842-6.9-6.354-11.719 1.035-19.766 7.135-24.143 18.083-.49 1.228-.026 3.221-2.905 3.29 0-4.656-.098-9.274.033-13.886.097-3.418-1.442-4.858-4.766-4.834-4.997.036-10.005.145-14.99-.117-4.536-.238-6.169 1.57-6.11 6.1.194 15.16.098 30.322.112 46.484m220.186 43.99c.15-1.814.546-3.647.408-5.438-.534-6.904-4.138-11.813-10.315-14.773-6.85-3.283-13.402-2.354-19.138 2.403-5.54 4.593-7.86 10.559-5.989 17.819 1.873 7.264 8.116 12.776 15.105 13.234 10.098.662 16.123-3.164 19.93-13.245z"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"
      />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
        fill="currentColor"
      />
    </svg>
  ),
  facebook: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
      <path
        d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zm-4 15h-2c-2.14 0-3 .5-3 2v3h5l-1 5h-4v15h-5V29h-4v-5h4v-3c0-4 2-7 6-7 2.9 0 4 1 4 1v4z"
        fill="currentColor"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" height="40px" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  meta: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="24px" viewBox="0 0 49 10" {...props}>
      <defs>
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1={61}
          y1={117}
          x2={259}
          y2={127}
          gradientTransform="scale(.05169 .05236)">
          <stop offset={0} stopColor="#0064e1" />
          <stop offset={0.4} stopColor="#0064e1" />
          <stop offset={0.83} stopColor="#0073ee" />
          <stop offset={1} stopColor="#0082fb" />
        </linearGradient>
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1={45}
          y1={139}
          x2={45}
          y2={66}
          gradientTransform="scale(.05169 .05236)">
          <stop offset={0} stopColor="#0082fb" />
          <stop offset={1} stopColor="#0064e0" />
        </linearGradient>
      </defs>
      <path
        d="M1.605 6.594c0 .574.125 1.015.29 1.285.21.348.53.496.855.496.418 0 .8-.105 1.54-1.137.589-.832 1.288-1.992 1.757-2.722L6.84 3.28c.55-.86 1.191-1.812 1.922-2.46C9.359.292 10.004 0 10.652 0c1.09 0 2.125.64 2.922 1.84.867 1.312 1.29 2.965 1.29 4.672 0 1.015-.2 1.761-.536 2.347-.324.57-.957 1.141-2.02 1.141V8.375c.91 0 1.137-.848 1.137-1.816 0-1.387-.316-2.918-1.02-4.016-.495-.777-1.14-1.254-1.85-1.254-.766 0-1.384.586-2.079 1.633-.371.555-.75 1.23-1.176 1.996l-.465.84c-.94 1.687-1.18 2.074-1.652 2.707C4.38 9.578 3.676 10 2.75 10 1.648 10 .953 9.52.523 8.793.172 8.199 0 7.422 0 6.535zm0 0"
        fill="#0081fb"
      />
      <path
        d="M1.266 1.953C2 .805 3.062 0 4.28 0c.707 0 1.407.21 2.14.816.802.664 1.657 1.754 2.72 3.551l.382.645c.922 1.558 1.45 2.355 1.754 2.734.395.484.672.629 1.032.629.91 0 1.136-.848 1.136-1.816l1.418-.047c0 1.015-.199 1.761-.535 2.347-.324.57-.957 1.141-2.02 1.141-.66 0-1.245-.145-1.894-.766-.5-.476-1.082-1.32-1.531-2.078L7.55 4.902C6.883 3.77 6.27 2.926 5.914 2.543c-.383-.41-.875-.906-1.656-.906-.637 0-1.176.449-1.625 1.14zm0 0"
        fill="url(#a)"
      />
      <path
        d="M4.258 1.637c-.637 0-1.176.449-1.625 1.14-.637.973-1.028 2.422-1.028 3.817 0 .574.125 1.015.29 1.285l-1.372.914C.172 8.199 0 7.422 0 6.535c0-1.61.438-3.285 1.266-4.582C2 .805 3.062 0 4.28 0zm0 0"
        fill="url(#b)"
      />
      <path
        d="M17.984.316h1.856L23 6.102 26.156.316h1.817v9.508h-1.516V2.54l-2.766 5.043H22.27L19.5 2.539v7.285h-1.516zM32.723 3.86c-1.09 0-1.743.832-1.899 1.856h3.688c-.078-1.055-.68-1.856-1.79-1.856zM29.32 6.301c0-2.16 1.38-3.73 3.426-3.73 2.016 0 3.219 1.55 3.219 3.843v.422h-5.14c.183 1.117.913 1.867 2.09 1.867.94 0 1.526-.289 2.085-.82l.805.996c-.758.707-1.723 1.113-2.942 1.113-2.218 0-3.543-1.637-3.543-3.691zm8.485-2.305H36.41V2.742h1.395V.664h1.46v2.078h2.118v1.254h-2.117v3.188c0 1.086.343 1.472 1.187 1.472.383 0 .606-.035.93-.09V9.81a4.267 4.267 0 01-1.215.171c-1.578 0-2.363-.875-2.363-2.62zm9.734 1.223c-.293-.75-.95-1.305-1.91-1.305-1.254 0-2.055.902-2.055 2.363 0 1.43.739 2.371 1.992 2.371.989 0 1.692-.582 1.973-1.304zM49 9.824h-1.434v-.992c-.402.586-1.132 1.16-2.312 1.16-1.902 0-3.172-1.61-3.172-3.715 0-2.12 1.3-3.707 3.25-3.707.965 0 1.723.39 2.234 1.082v-.91H49zm0 0"
        // fill="#192830"
        className="fill-[#192830] dark:fill-[#fff]"
      />
    </svg>
  ),
  googleLogo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="120px" height="41px" {...props}>
      <path
        fill="#EA4335"
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#FBBC05"
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#4285F4"
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
      />
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
      <path
        fill="#EA4335"
        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
      />
      <path
        fill="#4285F4"
        d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
      />
    </svg>
  ),
  microsoft: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337.6 72" width="130px" height="28px" {...props}>
      <path
        fill="#737373"
        d="M140.4 14.4v43.2h-7.5V23.7h-.1l-13.4 33.9h-5l-13.7-33.9h-.1v33.9h-6.9V14.4h10.8l12.4 32h.2l13.1-32h10.2zm6.2 3.3c0-1.2.4-2.2 1.3-3 .9-.8 1.9-1.2 3.1-1.2 1.3 0 2.4.4 3.2 1.2s1.3 1.8 1.3 3-.4 2.2-1.3 3c-.9.8-1.9 1.2-3.2 1.2s-2.3-.4-3.1-1.2c-.8-.9-1.3-1.9-1.3-3zm8.1 8.9v31h-7.3v-31h7.3zm22.1 25.7c1.1 0 2.3-.2 3.6-.8 1.3-.5 2.5-1.2 3.6-2v6.8c-1.2.7-2.5 1.2-4 1.5-1.5.3-3.1.5-4.9.5-4.6 0-8.3-1.4-11.1-4.3-2.9-2.9-4.3-6.6-4.3-11 0-5 1.5-9.1 4.4-12.3 2.9-3.2 7-4.8 12.4-4.8 1.4 0 2.8.2 4.1.5 1.4.3 2.5.8 3.3 1.2v7c-1.1-.8-2.3-1.5-3.4-1.9-1.2-.4-2.4-.7-3.6-.7-2.9 0-5.2.9-7 2.8s-2.6 4.4-2.6 7.6c0 3.1.9 5.6 2.6 7.3 1.7 1.7 4 2.6 6.9 2.6zm27.9-26.2c.6 0 1.1 0 1.6.1s.9.2 1.2.3v7.4c-.4-.3-.9-.6-1.7-.8s-1.6-.4-2.7-.4c-1.8 0-3.3.8-4.5 2.3s-1.9 3.8-1.9 7v15.6h-7.3v-31h7.3v4.9h.1c.7-1.7 1.7-3 3-4 1.4-.9 3-1.4 4.9-1.4zm3.2 16.5c0-5.1 1.5-9.2 4.3-12.2 2.9-3 6.9-4.5 12-4.5 4.8 0 8.6 1.4 11.3 4.3s4.1 6.8 4.1 11.7c0 5-1.5 9-4.3 12-2.9 3-6.8 4.5-11.8 4.5-4.8 0-8.6-1.4-11.4-4.2-2.8-2.9-4.2-6.8-4.2-11.6zm7.6-.3c0 3.2.7 5.7 2.2 7.4s3.6 2.6 6.3 2.6c2.6 0 4.7-.8 6.1-2.6 1.4-1.7 2.1-4.2 2.1-7.6 0-3.3-.7-5.8-2.1-7.6-1.4-1.7-3.5-2.6-6-2.6-2.7 0-4.7.9-6.2 2.7-1.7 1.9-2.4 4.4-2.4 7.7zm35-7.5c0 1 .3 1.9 1 2.5.7.6 2.1 1.3 4.4 2.2 2.9 1.2 5 2.5 6.1 3.9 1.2 1.5 1.8 3.2 1.8 5.3 0 2.9-1.1 5.2-3.4 7-2.2 1.8-5.3 2.6-9.1 2.6-1.3 0-2.7-.2-4.3-.5-1.6-.3-2.9-.7-4-1.2v-7.2c1.3.9 2.8 1.7 4.3 2.2 1.5.5 2.9.8 4.2.8 1.6 0 2.9-.2 3.6-.7.8-.5 1.2-1.2 1.2-2.3 0-1-.4-1.8-1.2-2.6-.8-.7-2.4-1.5-4.6-2.4-2.7-1.1-4.6-2.4-5.7-3.8s-1.7-3.2-1.7-5.4c0-2.8 1.1-5.1 3.3-6.9 2.2-1.8 5.1-2.7 8.6-2.7 1.1 0 2.3.1 3.6.4s2.5.6 3.4.9V34c-1-.6-2.1-1.2-3.4-1.7-1.3-.5-2.6-.7-3.8-.7-1.4 0-2.5.3-3.2.8-.7.7-1.1 1.4-1.1 2.4zm16.4 7.8c0-5.1 1.5-9.2 4.3-12.2 2.9-3 6.9-4.5 12-4.5 4.8 0 8.6 1.4 11.3 4.3s4.1 6.8 4.1 11.7c0 5-1.5 9-4.3 12-2.9 3-6.8 4.5-11.8 4.5-4.8 0-8.6-1.4-11.4-4.2-2.7-2.9-4.2-6.8-4.2-11.6zm7.6-.3c0 3.2.7 5.7 2.2 7.4s3.6 2.6 6.3 2.6c2.6 0 4.7-.8 6.1-2.6 1.4-1.7 2.1-4.2 2.1-7.6 0-3.3-.7-5.8-2.1-7.6-1.4-1.7-3.5-2.6-6-2.6-2.7 0-4.7.9-6.2 2.7-1.6 1.9-2.4 4.4-2.4 7.7zm48.4-9.7H312v25h-7.4v-25h-5.2v-6h5.2v-4.3c0-3.2 1.1-5.9 3.2-8s4.8-3.1 8.1-3.1c.9 0 1.7.1 2.4.1s1.3.2 1.8.4V18c-.2-.1-.7-.3-1.3-.5-.6-.2-1.3-.3-2.1-.3-1.5 0-2.7.5-3.5 1.4-.8.9-1.2 2.4-1.2 4.2v3.7h10.9v-7l7.3-2.2v9.2h7.4v6h-7.4V47c0 1.9.4 3.2 1 4 .7.8 1.8 1.2 3.3 1.2.4 0 .9-.1 1.5-.3.6-.2 1.1-.4 1.5-.7v6c-.5.3-1.2.5-2.3.7-1.1.2-2.1.3-3.2.3-3.1 0-5.4-.8-6.9-2.4-1.5-1.6-2.3-4.1-2.3-7.4l.1-15.8z"
      />
      <path fill="#F25022" d="M0 0H34.2V34.2H0z" />
      <path fill="#7FBA00" d="M37.8 0H72V34.2H37.8z" />
      <path fill="#00A4EF" d="M0 37.8H34.2V72H0z" />
      <path fill="#FFB900" d="M37.8 37.8H72V72H37.8z" />
    </svg>
  ),
  amazon: (props: IconProps) => (
    <svg
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 482"
      width="166px"
      height="40px"
      {...props}>
      <style>{".shp0{fill:#f90}"}</style>
      <path
        id="path8"
        fillRule="evenodd"
        className="shp0"
        d="M992.61 376.91c-92.98 68.51-227.75 105.06-343.78 105.06-162.69 0-309.16-60.15-419.97-160.19-8.71-7.87-.91-18.59 9.54-12.47C357.99 378.86 505.85 420.7 658.58 420.7c103.01 0 216.33-21.3 320.52-65.51 15.74-6.68 28.9 10.31 13.51 21.72"
      />
      <path
        id="path10"
        fillRule="evenodd"
        className="shp0"
        d="M1031.26 332.71c-11.84-15.18-78.56-7.18-108.51-3.62-9.12 1.11-10.51-6.83-2.3-12.54 53.15-37.38 140.34-26.59 150.51-14.06 10.17 12.6-2.65 99.97-52.58 141.67-7.66 6.41-14.98 3-11.56-5.5 11.21-27.98 36.35-90.71 24.44-105.95"
      />
      <path
        id="path12"
        fillRule="evenodd"
        d="M924.84 52.63V16.29c0-5.5 4.18-9.19 9.2-9.19h162.76c5.22 0 9.4 3.76 9.4 9.19v31.12c-.07 5.22-4.45 12.04-12.25 22.84l-84.35 120.36c31.34-.76 64.43 3.9 92.84 19.92 6.41 3.62 8.15 8.91 8.64 14.13v38.78c0 5.29-5.85 11.48-11.98 8.28-50.08-26.25-116.59-29.1-171.96.28-5.64 3.06-11.56-3.06-11.56-8.36v-36.82c0-5.92.07-16.02 5.99-25l97.71-140.07h-85.04c-5.22 0-9.4-3.69-9.4-9.12zM281.58 279.38c-4.73-.35-8.49-3.9-8.84-8.43V16.92c0-5.08 4.25-9.12 9.54-9.12h46.18c4.8.21 8.63 3.9 8.98 8.49V49.5h.91c12.04-32.1 34.68-47.06 65.18-47.06 31 0 50.36 14.96 64.29 47.06 11.98-32.1 39.21-47.06 68.39-47.06 20.76 0 43.46 8.56 57.32 27.77C609.2 51.59 606 82.64 606 109.86l-.07 160.33c0 5.08-4.25 9.19-9.54 9.19h-49.45c-4.95-.35-8.92-4.32-8.92-9.19V135.55c0-10.72.98-37.46-1.39-47.62-3.69-17.06-14.77-21.86-29.11-21.86-11.98 0-24.52 8-29.6 20.81-5.09 12.81-4.6 34.26-4.6 48.67v134.64c0 5.08-4.25 9.19-9.54 9.19h-49.45c-5.01-.35-8.91-4.32-8.91-9.19l-.07-134.64c0-28.34 4.66-70.04-30.51-70.04-35.59 0-34.2 40.66-34.2 70.04v134.64c0 5.08-4.25 9.19-9.54 9.19h-49.52zm1078-133.67c0 77.49-43.95 138.96-113.25 138.96-72.15 0-111.43-63.08-111.43-141.67 0-79.09 39.77-140.56 111.43-140.56 73.48 0 113.25 63.07 113.25 143.27zm-151.62-10.72c0 31.05-.49 97.33 38.37 97.33 38.38 0 40.19-53.47 40.19-86.05 0-21.44-.91-47.06-7.38-67.39-5.58-17.69-16.65-24.58-32.39-24.58-36.49 0-38.79 49.71-38.79 80.69zm197.59 144.39c-4.95-.35-8.92-4.32-8.92-9.19l-.07-254.11c.42-4.66 4.53-8.28 9.54-8.28h45.9c4.32.21 7.87 3.13 8.85 7.1v38.85h.9c13.86-34.74 33.29-51.31 67.49-51.31 22.22 0 43.88 8 57.81 29.93C1600 52.7 1600 86.88 1600 111.46v159.91c-.56 4.46-4.67 8.01-9.54 8.01h-49.66c-4.53-.35-8.29-3.69-8.78-8.01V133.39c0-27.78 3.21-68.44-30.99-68.44-12.05 0-23.12 8.08-28.62 20.33-6.97 15.53-7.87 30.98-7.87 48.11v136.8c-.07 5.08-4.39 9.19-9.68 9.19h-49.31zm-560.52-.7zm-11.7 1.19c-16.44-13.65-19.44-19.99-28.42-33-27.16 27.7-46.45 35.99-81.63 35.99-41.71 0-74.1-25.69-74.1-77.14 0-40.17 21.73-67.53 52.79-80.89 26.89-11.84 64.43-13.93 93.12-17.2v-6.4c0-11.77.91-25.69-6.06-35.86-5.99-9.12-17.55-12.88-27.79-12.88-18.87 0-35.66 9.68-39.77 29.73-.83 4.45-4.11 8.84-8.63 9.05l-47.99-5.15c-4.04-.91-8.57-4.18-7.38-10.38C668.47 17.54 721.12 0 768.21 0c24.09 0 55.57 6.41 74.59 24.65 24.1 22.48 21.8 52.49 21.8 85.14v77.14c0 23.18 9.61 33.34 18.66 45.87 3.14 4.46 3.83 9.82-.21 13.16-10.1 8.43-28.06 24.09-37.95 32.86l-.07-.14c-3.28 2.93-8.01 3.13-11.7 1.19zm-38.24-121.84v-10.72c-35.87 0-73.69 7.66-73.69 49.85 0 21.37 11.15 35.85 30.16 35.85 13.86 0 26.4-8.56 34.27-22.48 9.75-17.13 9.26-33.21 9.26-52.5zM195.85 278.68c-3.28 2.93-8.01 3.13-11.7 1.19-16.44-13.65-19.37-19.99-28.42-33-27.16 27.7-46.38 35.99-81.63 35.99-41.64 0-74.1-25.69-74.1-77.14 0-40.17 21.8-67.53 52.79-80.89 26.89-11.84 64.43-13.93 93.12-17.2v-6.4c0-11.77.91-25.69-5.99-35.86-6.06-9.12-17.62-12.88-27.79-12.88-18.87 0-35.73 9.68-39.84 29.73-.83 4.45-4.11 8.84-8.56 9.05l-48.06-5.15c-4.04-.91-8.5-4.18-7.38-10.38C19.36 17.54 71.95 0 119.03 0c24.09 0 55.57 6.41 74.59 24.65 24.1 22.48 21.8 52.49 21.8 85.14v77.14c0 23.18 9.61 33.34 18.66 45.87 3.21 4.46 3.9 9.82-.14 13.16-10.09 8.43-28.06 24.09-37.95 32.86l-.14-.14zm-49.94-120.65v-10.72c-35.8 0-73.62 7.66-73.62 49.85 0 21.37 11.08 35.85 30.09 35.85 13.93 0 26.4-8.56 34.27-22.48 9.75-17.13 9.26-33.21 9.26-52.5z"
        fill="currentcolor"
      />
    </svg>
  ),
  tesla: (props: IconProps) => (
    <svg
      width="30px"
      height="39px"
      viewBox="0 0 278.67201 360.43799"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g fill="#e82127">
        <path d="M0 324.189c.812 3.167 3.554 6.404 7.316 7.215h11.37l.58.229v28.691h7.1v-28.691l.645-.229h11.38c3.804-.98 6.487-4.048 7.285-7.215v-.07H0v.07M70.271 360.405h27.011c3.758-.747 6.551-4.058 7.334-7.263H62.937c.778 3.206 3.612 6.516 7.334 7.263M70.271 345.688h27.011c3.758-.741 6.551-4.053 7.334-7.262H62.937c.778 3.21 3.612 6.521 7.334 7.262M70.271 331.366h27.011c3.758-.749 6.551-4.058 7.334-7.265H62.937c.778 3.207 3.612 6.516 7.334 7.265M131.874 331.297h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415v-21.944h-32.42v-7.159M216.795 360.409c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l.02-29.118-7.065.02v36.238h32.383M244.321 331.395h27.02c3.753-.746 6.544-4.058 7.331-7.262h-41.681c.779 3.205 3.611 6.516 7.33 7.262M238.077 338.483v21.912h7.027v-14.589h25.575v14.589h7.022v-21.874l-39.624-.038" />
      </g>
      <g fill="#e82127">
        <path d="M139.35 252.502l35.476-199.519c33.815 0 44.481 3.708 46.021 18.843 0 0 22.684-8.458 34.125-25.636-44.646-20.688-89.505-21.621-89.505-21.621l-26.176 31.882.059-.004-26.176-31.883s-44.86.934-89.5 21.622c11.431 17.178 34.124 25.636 34.124 25.636C59.347 56.686 70 52.978 103.588 52.954l35.762 199.548" />
        <path d="M139.336 15.36c36.09-.276 77.399 5.583 119.687 24.014 5.652-10.173 7.105-14.669 7.105-14.669C219.901 6.416 176.61.157 139.331 0 102.054.157 58.765 6.417 12.544 24.705c0 0 2.062 5.538 7.1 14.669 42.28-18.431 83.596-24.29 119.687-24.014h.005" />
      </g>
    </svg>
  ),
  twitterlogo: (props: IconProps) => <svg></svg>,
  nasa: (props: IconProps) => <svg></svg>,
  stripe: (props: IconProps) => <svg></svg>,
  appleLogo: (props: IconProps) => <svg></svg>,
  delloit: (props: IconProps) => <svg></svg>,
  morganStanley: (props: IconProps) => <svg></svg>,
  uber: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="101px"
      height="30px"
      viewBox="0 0 926.906 321.777"
      xmlSpace="preserve"
      {...props}>
      <g fill="currentColor">
        <path d="M53.328 229.809c3.917 10.395 9.34 19.283 16.27 26.664 6.93 7.382 15.14 13.031 24.63 16.948 9.491 3.917 19.81 5.875 30.958 5.875 10.847 0 21.015-2.034 30.506-6.102s17.776-9.792 24.856-17.173c7.08-7.382 12.579-16.194 16.496-26.438 3.917-10.244 5.875-21.692 5.875-34.347V0h47.453v316.354h-47.001v-29.376c-10.545 11.147-22.974 19.734-37.285 25.761-14.312 6.025-29.752 9.038-46.323 9.038-16.873 0-32.615-2.938-47.228-8.813-14.612-5.875-27.267-14.235-37.962-25.082S15.441 264.006 9.265 248.79C3.088 233.575 0 216.628 0 197.947V0h47.453v195.236c0 12.655 1.958 24.178 5.875 34.573zM332.168 0v115.243c10.545-10.545 22.748-18.905 36.607-25.082s28.924-9.265 45.193-9.265c16.873 0 32.689 3.163 47.453 9.49 14.763 6.327 27.567 14.914 38.414 25.761s19.434 23.651 25.761 38.414c6.327 14.764 9.49 30.431 9.49 47.002 0 16.57-3.163 32.162-9.49 46.774-6.327 14.613-14.914 27.343-25.761 38.188-10.847 10.847-23.651 19.434-38.414 25.761-14.764 6.327-30.581 9.49-47.453 9.49-16.27 0-31.409-3.088-45.419-9.265-14.01-6.176-26.288-14.537-36.833-25.082v28.924h-45.193V0h45.645zm5.197 232.746c4.067 9.642 9.717 18.078 16.948 25.309 7.231 7.231 15.667 12.956 25.308 17.174 9.642 4.218 20.036 6.327 31.184 6.327 10.847 0 21.09-2.109 30.731-6.327s18.001-9.942 25.083-17.174c7.08-7.23 12.729-15.667 16.947-25.309 4.218-9.641 6.327-20.035 6.327-31.183s-2.109-21.618-6.327-31.41-9.867-18.303-16.947-25.534c-7.081-7.23-15.441-12.88-25.083-16.947s-19.885-6.102-30.731-6.102-21.09 2.034-30.731 6.102-18.077 9.717-25.309 16.947c-7.23 7.231-12.955 15.742-17.173 25.534-4.218 9.792-6.327 20.262-6.327 31.41-.001 11.148 2.033 21.542 6.1 31.183zM560.842 155.014c6.025-14.462 14.312-27.191 24.856-38.188s23.049-19.659 37.511-25.986 30.129-9.49 47.001-9.49c16.571 0 31.937 3.013 46.098 9.038 14.16 6.026 26.362 14.387 36.606 25.083 10.244 10.695 18.229 23.35 23.952 37.962 5.725 14.613 8.587 30.506 8.587 47.68v14.914H597.901c1.507 9.34 4.52 18.002 9.039 25.985 4.52 7.984 10.168 14.914 16.947 20.789 6.779 5.876 14.462 10.471 23.049 13.784 8.587 3.314 17.7 4.972 27.342 4.972 27.418 0 49.563-11.299 66.435-33.896l32.991 24.404c-11.449 15.366-25.609 27.418-42.481 36.155-16.873 8.737-35.854 13.106-56.944 13.106-17.174 0-33.217-3.014-48.131-9.039s-27.869-14.462-38.866-25.309-19.659-23.576-25.986-38.188-9.491-30.506-9.491-47.679c-.002-16.269 3.012-31.635 9.037-46.097zm63.497-17.852c-12.805 10.696-21.316 24.932-25.534 42.708h140.552c-3.917-17.776-12.278-32.012-25.083-42.708-12.805-10.695-27.794-16.043-44.967-16.043-17.174 0-32.163 5.348-44.968 16.043zM870.866 142.359c-9.641 10.545-14.462 24.856-14.462 42.934v131.062h-45.646V85.868h45.193v28.472c5.725-9.34 13.182-16.722 22.371-22.145 9.189-5.424 20.111-8.136 32.766-8.136h15.817v42.482h-18.981c-15.064.001-27.417 5.273-37.058 15.818z" />
      </g>
    </svg>
  ),
  dashboard: (props: IconProps) => (
    <svg
      height="24px"
      width="24px"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 001.04 2.15C1 2.324 1 2.52 1 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 002.15 6.96C2.324 7 2.52 7 2.75 7H5.25c.229 0 .426 0 .6-.041A1.5 1.5 0 006.96 5.85C7 5.676 7 5.48 7 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 005.85 1.04C5.676 1 5.48 1 5.25 1H2.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 01-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 2.15C8 2.324 8 2.52 8 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 6.96C9.324 7 9.52 7 9.75 7H12.25c.229 0 .426 0 .6-.041A1.5 1.5 0 0013.96 5.85C14 5.676 14 5.48 14 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 1.04C12.676 1 12.48 1 12.25 1H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM2.75 8H5.25c.229 0 .426 0 .6.041A1.5 1.5 0 016.96 9.15C7 9.324 7 9.52 7 9.75V12.25c0 .229 0 .426-.041.6A1.5 1.5 0 015.85 13.96C5.676 14 5.48 14 5.25 14H2.75c-.229 0-.426 0-.6-.041A1.5 1.5 0 011.04 12.85C1 12.676 1 12.48 1 12.25V9.75c0-.229 0-.426.041-.6A1.5 1.5 0 012.15 8.04C2.324 8 2.52 8 2.75 8zm.05 1c-.308 0-.374.003-.417.014a.5.5 0 00-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 00.37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 00.37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 00-.37-.37C5.575 9.004 5.509 9 5.2 9H2.8zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 9.15C8 9.324 8 9.52 8 9.75V12.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 13.96c.174.041.371.041.6.041H12.25c.229 0 .426 0 .6-.041a1.5 1.5 0 001.109-1.109c.041-.174.041-.371.041-.6V9.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 8.04C12.676 8 12.48 8 12.25 8H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 01-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export const contactMethods1 = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    contact: "Support@example.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    contact: "+1 (555) 000-000",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    contact: "Mountain View, California, United State.",
  },
];

export const contactMethods2 = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    title: "Join our community",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: {
      name: "Join our Discord",
      href: "javascript:void(0)",
    },
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_17_80)">
          <path
            d="M15.1003 43.5C33.2091 43.5 43.1166 28.4935 43.1166 15.4838C43.1166 15.0619 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11066C46.205 9.90926 44.2993 10.4308 42.3478 10.6575C44.4026 9.42588 45.9411 7.491 46.6781 5.21159C44.7451 6.35718 42.6312 7.16528 40.4269 7.60128C38.9417 6.02318 36.978 4.97829 34.8394 4.62816C32.7008 4.27803 30.5064 4.64216 28.5955 5.66425C26.6846 6.68635 25.1636 8.30947 24.2677 10.2827C23.3718 12.2559 23.1509 14.4693 23.6391 16.5807C19.725 16.3842 15.8959 15.3675 12.4 13.5963C8.90405 11.825 5.81939 9.33893 3.34594 6.29909C2.0888 8.46655 1.70411 11.0314 2.27006 13.4722C2.83601 15.9131 4.31013 18.047 6.39281 19.44C4.82926 19.3904 3.29995 18.9694 1.93125 18.2119V18.3338C1.92985 20.6084 2.7162 22.8132 4.15662 24.5736C5.59704 26.334 7.60265 27.5412 9.8325 27.99C8.38411 28.3863 6.86396 28.4441 5.38969 28.1588C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9613 14.5847 35.0025C11.0968 37.7423 6.78835 39.2283 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.0769C4.50571 41.9676 9.74706 43.5028 15.1003 43.5Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_80">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    title: "Follow us on Twitter",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: {
      name: "Send us DMs",
      href: "javascript:void(0)",
    },
  },
];
