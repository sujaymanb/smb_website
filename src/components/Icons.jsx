import React from "react";

export const ProjectIcon = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
      />
    </svg>
  );
};

export const VideoIcon = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z"
      />
    </svg>
    );
};

export const LinkedInIcon = ({ ...props }) => {
  return (
      <svg class="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
    );
};

export const GithubIcon = ({ ...props }) => {
  return (
    <svg class="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
    );
}

export const ArchiveIcon = ({ ...props }) => {
  return (
    <svg class="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
</svg>
    );
}

export const SunIcon = ({ ...props }) => {
  return (
    <svg class="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="5" />  <line x1="12" y1="1" x2="12" y2="3" />  <line x1="12" y1="21" x2="12" y2="23" />  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />  <line x1="1" y1="12" x2="3" y2="12" />  <line x1="21" y1="12" x2="23" y2="12" />  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
    );
}

export const LightBulb = ({ ...props }) => {
  return (
    <svg class="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
</svg>
    );
}

export const PaperIcon = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM7 6v4h4V6H7zm0 6v2h10v-2H7zm0 4v2h10v-2H7zm6-9v2h4V7h-4z" />
    </svg>
  );
};

export const ContactIcon = ({ ...props }) => {
  return (
    <svg width="112" height="112" fill="none" {...props}>
      <path
        d="M49.596 32.108c1.902-.968 3.94-1.495 6.064-1.495 1.716 0 3.364.34 4.91.969 7.475 3.024 12.928 12.775 12.928 24.327 0 11.552-5.453 21.303-12.928 24.327-1.563.629-3.21.968-4.91.968-2.123 0-4.179-.526-6.064-1.495m0-47.6c5.436 3.516 9.309 12.842 9.309 23.8 0 10.957-3.873 20.284-9.31 23.8m0-47.6c-1.495-.969-3.108-1.496-4.79-1.496-2.243 0-4.366.952-6.252 2.617m11.043 46.48c-1.495.968-3.11 1.494-4.791 1.494-2.243 0-4.366-.934-6.252-2.616m0-45.358c3.415 4.128 5.776 12.74 5.776 22.679m-5.776-22.68c3.432 4.146 5.776 12.742 5.776 22.68m-5.776-22.68c-1.393-1.664-2.956-2.616-4.604-2.616-2.514 0-4.824 2.192-6.625 5.827 1.46 4.638 2.395 11.637 2.395 19.469m14.61 0c0 9.938-2.344 18.534-5.776 22.68m5.776-22.68c0 9.938-2.361 18.551-5.776 22.68m0 0c-1.393 1.664-2.956 2.615-4.604 2.615-2.531 0-4.824-2.191-6.625-5.827m2.395-19.468c0 7.831-.934 14.83-2.395 19.468m2.395-19.468c0-7.832-.917-14.83-2.378-19.469-1.155-3.635-2.634-5.827-4.247-5.827-3.67 0-6.643 11.331-6.643 25.296 0 13.964 2.973 25.295 6.643 25.295 1.613 0 3.091-2.191 4.23-5.827M77.37 30.613a25.62 25.62 0 0 0-5.86.68c9.496 2.65 16.563 12.656 16.563 24.616 0 11.96-7.05 21.966-16.564 24.616 1.886.441 3.84.68 5.861.68 13.965 0 25.296-11.332 25.296-25.296 0-13.965-11.314-25.296-25.296-25.296Zm10.72 25.296c0-11.96-7.067-21.966-16.58-24.616a18.75 18.75 0 0 0-4.995-.68c-2.055 0-4.06.34-5.946.969 7.458 3.024 12.928 12.775 12.928 24.327 0 11.552-5.453 21.303-12.928 24.327a18.72 18.72 0 0 0 10.94.289c9.514-2.65 16.581-12.657 16.581-24.616ZM12.24 30.613c-1.597 0-2.905 11.331-2.905 25.296 0 13.964 1.308 25.295 2.905 25.295 1.596 0 2.904-11.33 2.904-25.295 0-13.965-1.29-25.296-2.905-25.296Z"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export const ArrowIcon = ({ ...props }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 12L16 20L24 28"
        stroke="currentColor"
        stroke-width="2"
      ></path>
    </svg>
  );
};

export const LinkIcon = ({ ...props }) => {
  return (
    <svg width="40" height="40" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
    <path fill="#231F20" d="M61.984,32.527L47.379,24.18C47.742,22.84,48,21.457,48,20c0-8.836-7.164-16-16-16s-16,7.164-16,16 c0,3.672,1.289,7.016,3.371,9.719L0.844,53.543c-1.359,1.746-1.043,4.258,0.699,5.613C2.274,59.727,3.141,60,3.997,60 c1.191,0,2.371-0.531,3.16-1.543L25.652,34.68C27.602,35.523,29.742,36,32,36c4.496,0,8.543-1.867,11.449-4.852l14.566,8.324 c1.918,1.102,4.359,0.426,5.457-1.488C64.572,36.066,63.902,33.625,61.984,32.527z"></path> 
    </g>
    </svg>);
};
