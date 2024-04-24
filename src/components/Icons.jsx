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

export const MobileRoboIcon = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M1 14a5.002 5.002 0 009 3h5.17A3 3 0 0018 19c1.31 0 2.42-.83 2.83-2H23v-2c0-5.5-4.5-10-10-10H1v9m20 1H10.9A5.002 5.002 0 003 10V7h9.5c2.6 0 4.92 1.16 6.5 3h-4v2h5.25c.42.92.67 1.94.75 3M6 11c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
    </svg>
  );
};

export const RoboArmIcon = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 19h4.6L2.62 8.64C2.23 8 2 7.29 2 6.5a3.999 3.999 0 017.87-1H14V3c0-1.1.9-2 2-2v2.59L17.59 2H22v2h-3.59L16 6.41v.18L18.41 9H22v2h-4.41L16 9.41V12a2 2 0 01-2-2V7.5H9.87c-.1.39-.26.76-.46 1.1l6 10.4H20a2 2 0 012 2v1H2v-1c0-1.1.9-2 2-2m3.91-9c-.56.32-1.21.5-1.91.5l4.91 8.5h2.19l-5.19-9M6 4.5a2 2 0 00-2 2c0 1.11.89 2 2 2 1.11 0 2-.89 2-2a2 2 0 00-2-2z" />
    </svg>
  );
};

export const VideoIcon = ({ ...props }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 4 H20 A2 2 0 0 1 22 6 V18 A2 2 0 0 1 20 20 H4 A2 2 0 0 1 2 18 V6 A2 2 0 0 1 4 4 z" />
      <path d="M2 8h20" />
      <path d="M10 14 A2 2 0 0 1 8 16 A2 2 0 0 1 6 14 A2 2 0 0 1 10 14 z" />
      <path d="M8 12h8" />
      <path d="M18 14 A2 2 0 0 1 16 16 A2 2 0 0 1 14 14 A2 2 0 0 1 18 14 z" />
    </svg>
    );
};

export const LinkedInIcon = ({ ...props }) => {
  return (
      <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M6 4 H18 A2 2 0 0 1 20 6 V18 A2 2 0 0 1 18 20 H6 A2 2 0 0 1 4 18 V6 A2 2 0 0 1 6 4 z" />
      <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 00-4 0" />
    </svg>
    );
};

export const GithubIcon = ({ ...props }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
    );
}

export const ArchiveIcon = ({ ...props }) => {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.309 1a1 1 0 00-.894.553L1.053 4.276A.5.5 0 001 4.5V13a1 1 0 001 1h11a1 1 0 001-1V4.5a.5.5 0 00-.053-.224l-1.362-2.723A1 1 0 0011.691 1H3.309zm0 1H7v2H2.309l1-2zM8 4V2h3.691l1 2H8zm-.5 1H13v8H2V5h5.5zm-2 2a.5.5 0 000 1h4a.5.5 0 000-1h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const EyeIcon = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5zm3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.594 7.594 0 01-2.335 2.348 7.326 7.326 0 01-7.889 0A7.615 7.615 0 011.721 8a7.594 7.594 0 012.52-2.462 4 4 0 107.518 0c.062.037.124.075.185.114zM8 6.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 018 6.5z"
      />
    </svg>
  );
};

export const NoteIcon = ({ ...props }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M7 3 H17 A2 2 0 0 1 19 5 V19 A2 2 0 0 1 17 21 H7 A2 2 0 0 1 5 19 V5 A2 2 0 0 1 7 3 z" />
      <path d="M9 7h6M9 11h6M9 15h4" />
    </svg>
  );
};

export const PaperIcon = ({ ...props }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2M18 14h-8M15 18h-5" />
      <path d="M10 6h8v4h-8V6z" />
    </svg>
  );
};

export const WheelChairIcon = ({ ...props }) => {
  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 6.5a2 2 0 10-2-2 2 2 0 002 2zm7.5 14h-1v-5a1 1 0 00-1-1h-5v-2h5a1 1 0 000-2h-5v-2a1 1 0 00-2 0v7a1 1 0 001 1h5v5a1 1 0 001 1h2a1 1 0 000-2zm-6.8-1.6a4 4 0 01-7.2-2.4 4 4 0 012.4-3.66A1 1 0 107.1 11a6 6 0 107.2 9.1 1 1 0 00-1.6-1.2z" />
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
    <svg width="40" height="40" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="currentColor">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
    <path d="M61.984,32.527L47.379,24.18C47.742,22.84,48,21.457,48,20c0-8.836-7.164-16-16-16s-16,7.164-16,16 c0,3.672,1.289,7.016,3.371,9.719L0.844,53.543c-1.359,1.746-1.043,4.258,0.699,5.613C2.274,59.727,3.141,60,3.997,60 c1.191,0,2.371-0.531,3.16-1.543L25.652,34.68C27.602,35.523,29.742,36,32,36c4.496,0,8.543-1.867,11.449-4.852l14.566,8.324 c1.918,1.102,4.359,0.426,5.457-1.488C64.572,36.066,63.902,33.625,61.984,32.527z"></path> 
    </g>
    </svg>);
};
