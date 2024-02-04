import { type NextPage } from "next";
import Head from "next/head";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex min-h-screen flex-col items-center justify-center bg-center text-brand-primary"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent 0%, #FFFFFF 100%), url('/img/bg.jpg')",
        }}
      >
        <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16 ">
          <h1 className="flex w-full justify-center">
            <span className="sr-only">sonnyangel.watch</span>
            <svg
              viewBox="0 0 448 227"
              fill="none"
              className="h-auto w-full max-w-96"
            >
              <path
                d="M78.826 87.436c-1.5-.947-2.25-2.447-2.25-4.499 0-2.052 1.5-5.17 4.499-9.352.868-1.342 2.25-2.012 4.143-2.012 1.973 0 4.617.986 7.932 2.96 3.315 1.893 6.314 2.84 8.997 2.84 4.814 0 7.222-.947 7.222-2.84 0-1.5-2.644-2.605-7.932-3.316-4.972-.71-9.905-2.565-14.798-5.564-2.289-1.42-4.183-3.63-5.683-6.63-1.5-3.077-2.249-6.708-2.249-10.89 0-12.47 8.563-18.705 25.689-18.705 5.604 0 11.365 1.341 17.285 4.025 2.762 1.263 4.143 2.841 4.143 4.735 0 1.894-.868 4.222-2.604 6.985-1.737 2.762-3.513 4.143-5.328 4.143-.947 0-2.723-.592-5.327-1.776-2.526-1.183-5.288-1.775-8.287-1.775-4.656 0-6.985.868-6.985 2.604 0 2.368 2.684 3.907 8.051 4.617 5.208.553 10.259 2.052 15.153 4.499 2.288 1.105 4.183 3.038 5.682 5.8 1.579 2.684 2.368 6.078 2.368 10.182s-.789 7.616-2.368 10.536c-1.499 2.841-3.63 4.972-6.393 6.392-5.051 2.447-11.404 3.67-19.059 3.67-7.577 0-14.877-2.21-21.901-6.63zm49.751-25.571c0-9.47 3.315-17.284 9.945-23.44 6.629-6.156 14.206-9.234 22.729-9.234 8.524 0 16.061 3.078 22.612 9.234 6.55 6.077 9.826 13.85 9.826 23.322 0 6.55-1.697 12.39-5.091 17.52-3.394 5.052-7.537 8.8-12.43 11.247-4.815 2.368-9.826 3.552-15.035 3.552s-10.26-1.263-15.153-3.789c-4.893-2.604-9.037-6.393-12.431-11.365-3.314-5.05-4.972-10.733-4.972-17.047zm24.743 8.524c2.525 1.894 5.09 2.84 7.695 2.84 2.604 0 5.208-.986 7.813-2.959 2.604-1.973 3.907-4.893 3.907-8.76s-1.224-6.748-3.67-8.642c-2.447-1.894-5.091-2.841-7.932-2.841s-5.485.986-7.932 2.96c-2.446 1.972-3.67 4.892-3.67 8.76 0 3.788 1.263 6.669 3.789 8.642zm76.785-39.777c7.892 0 14.442 3.038 19.651 9.115 5.288 5.998 7.932 13.338 7.932 22.02v20.835c0 1.815-.079 3.197-.237 4.144-.079.868-.394 1.854-.947 2.96-1.105 2.13-4.183 3.196-9.234 3.196-5.603 0-8.839-1.46-9.707-4.38-.474-1.342-.71-3.355-.71-6.038V61.628c0-3.236-.948-5.761-2.842-7.576-1.815-1.816-4.301-2.723-7.458-2.723-3.078 0-5.603.947-7.576 2.841-1.895 1.894-2.842 4.38-2.842 7.458v20.954c0 1.815-.079 3.197-.236 4.144-.079.868-.435 1.854-1.066 2.96-1.026 2.13-4.064 3.196-9.116 3.196-4.972 0-8.01-1.066-9.115-3.197-.553-1.184-.908-2.21-1.066-3.078-.078-.947-.118-2.328-.118-4.143V40.556c0-1.736.04-3.039.118-3.907.158-.947.553-1.973 1.184-3.078 1.105-1.973 4.144-2.96 9.116-2.96 4.814 0 7.774.908 8.879 2.723.789 1.342 1.184 2.96 1.184 4.854.315-.552 1.026-1.342 2.13-2.367 1.105-1.026 2.171-1.855 3.197-2.487 2.683-1.815 5.643-2.722 8.879-2.722zm65.874 0c7.892 0 14.443 3.038 19.652 9.115 5.287 5.998 7.931 13.338 7.931 22.02v20.835c0 1.815-.079 3.197-.236 4.144-.079.868-.395 1.854-.947 2.96-1.105 2.13-4.183 3.196-9.234 3.196-5.604 0-8.84-1.46-9.708-4.38-.473-1.342-.71-3.355-.71-6.038V61.628c0-3.236-.947-5.761-2.841-7.576-1.816-1.816-4.302-2.723-7.459-2.723-3.078 0-5.603.947-7.576 2.841-1.894 1.894-2.841 4.38-2.841 7.458v20.954c0 1.815-.079 3.197-.237 4.144-.079.868-.434 1.854-1.066 2.96-1.026 2.13-4.064 3.196-9.115 3.196-4.972 0-8.011-1.066-9.116-3.197-.552-1.184-.907-2.21-1.065-3.078-.079-.947-.119-2.328-.119-4.143V40.556c0-1.736.04-3.039.119-3.907.158-.947.552-1.973 1.184-3.078 1.104-1.973 4.143-2.96 9.115-2.96 4.814 0 7.774.908 8.879 2.723.789 1.342 1.184 2.96 1.184 4.854.315-.552 1.026-1.342 2.131-2.367 1.105-1.026 2.17-1.855 3.196-2.487 2.683-1.815 5.643-2.722 8.879-2.722zm85.612.71c4.656 2.052 6.985 4.538 6.985 7.458 0 1.42-.316 2.762-.947 4.025-.632 1.263-.948 1.934-.948 2.013l-31.016 69.373c-.632 1.499-1.184 2.644-1.658 3.433-.394.789-1.065 1.539-2.012 2.249-.947.71-2.131 1.066-3.552 1.066-1.42 0-3.512-.592-6.274-1.776-4.656-2.052-6.985-4.499-6.985-7.34 0-1.894 3.789-10.931 11.365-27.11l-23.558-39.659c-1.579-2.604-2.368-4.538-2.368-5.8 0-2.526 2.131-5.051 6.393-7.577 2.683-1.578 4.775-2.368 6.274-2.368 1.5 0 2.723.316 3.67.947.947.632 1.618 1.303 2.013 2.013.473.631 2.644 4.301 6.511 11.01 3.946 6.63 7.695 12.825 11.246 18.586.395-1.263 2.526-6.117 6.393-14.561 3.867-8.524 5.919-13.062 6.156-13.614.316-.553.789-1.224 1.421-2.013 1.026-1.342 2.446-2.012 4.261-2.012 1.895 0 4.104.552 6.63 1.657z"
                fill="#FF9595"
              ></path>
              <path
                d="M87.397 114.028c.474-4.419 3.591-6.629 9.352-6.629 3.078 0 5.367.236 6.867.71 1.499.474 2.525 1.302 3.078 2.486.631 1.184.986 2.249 1.065 3.196.158.869.237 2.21.237 4.025v41.435c0 1.815-.079 3.196-.237 4.143-.079.869-.395 1.895-.947 3.078-1.105 2.052-3.828 3.078-8.168 3.078-4.262 0-7.143-.513-8.643-1.539-1.42-1.105-2.249-2.683-2.486-4.735-2.92 4.183-7.813 6.274-14.68 6.274-6.787 0-13.1-3.117-18.94-9.352-5.84-6.235-8.761-13.456-8.761-21.664 0-8.287 2.92-15.509 8.76-21.665 5.92-6.234 12.391-9.352 19.415-9.352 2.684 0 5.13.474 7.34 1.421 2.21.947 3.749 1.854 4.617 2.723.868.789 1.579 1.578 2.131 2.367zm-21.546 24.624c0 2.605 1.026 4.972 3.078 7.103 2.052 2.052 4.538 3.078 7.458 3.078s5.328-1.065 7.222-3.196c1.973-2.131 2.96-4.459 2.96-6.985 0-2.604-.948-5.011-2.842-7.221-1.815-2.21-4.301-3.315-7.458-3.315-3.078 0-5.604 1.105-7.577 3.315-1.894 2.21-2.84 4.617-2.84 7.221zm80.348-31.253c7.892 0 14.443 3.038 19.652 9.115 5.287 5.998 7.931 13.338 7.931 22.02v20.835c0 1.816-.079 3.197-.236 4.144-.079.868-.395 1.854-.948 2.959-1.104 2.131-4.182 3.197-9.234 3.197-5.603 0-8.839-1.46-9.707-4.38-.474-1.342-.71-3.355-.71-6.038v-20.836c0-3.236-.947-5.761-2.842-7.576-1.815-1.815-4.301-2.723-7.458-2.723-3.078 0-5.603.947-7.576 2.841-1.894 1.894-2.842 4.38-2.842 7.458v20.954c0 1.816-.078 3.197-.236 4.144-.079.868-.434 1.854-1.066 2.959-1.026 2.131-4.064 3.197-9.115 3.197-4.972 0-8.011-1.066-9.116-3.197-.552-1.183-.908-2.209-1.065-3.078-.079-.947-.119-2.328-.119-4.143v-41.908c0-1.736.04-3.039.119-3.907.157-.947.552-1.973 1.183-3.078 1.105-1.973 4.144-2.959 9.116-2.959 4.814 0 7.774.907 8.879 2.723.789 1.341 1.184 2.959 1.184 4.853.315-.552 1.026-1.341 2.131-2.367 1.105-1.026 2.17-1.855 3.196-2.486 2.683-1.816 5.643-2.723 8.879-2.723zm70.728 54.575c-2.999 3.946-7.774 5.919-14.325 5.919-6.55 0-12.706-2.999-18.468-8.997-5.682-6.077-8.523-13.141-8.523-21.191 0-8.05 2.88-15.114 8.642-21.191 5.761-6.077 12.075-9.115 18.941-9.115 2.684 0 5.13.513 7.34 1.539 2.21.947 3.709 1.854 4.499 2.723.868.789 1.539 1.539 2.012 2.249.237-2.21 1.026-3.867 2.368-4.972 1.42-1.184 3.67-1.776 6.748-1.776 3.078 0 5.327.237 6.748.71 1.42.474 2.407 1.302 2.959 2.486.632 1.105.987 2.092 1.066 2.96.158.868.236 2.21.236 4.025v49.011c0 9.076-3.156 16.376-9.47 21.901-6.314 5.604-13.417 8.405-21.309 8.405-5.999 0-11.72-1.46-17.166-4.38s-8.169-5.564-8.169-7.932c0-3.078 1.184-5.8 3.552-8.168 1.499-1.658 2.644-2.802 3.433-3.433.868-.632 1.855-.947 2.96-.947s2.249.473 3.433 1.42c3.788 2.92 7.892 4.38 12.312 4.38 2.999 0 5.445-1.183 7.34-3.551 1.894-2.368 2.841-5.209 2.841-8.524v-3.551zm-21.073-24.151c0 2.526.987 4.815 2.96 6.867 2.052 2.052 4.499 3.078 7.34 3.078 2.92 0 5.327-1.026 7.221-3.078 1.894-2.131 2.842-4.42 2.842-6.867 0-2.525-.908-4.853-2.723-6.984-1.816-2.21-4.262-3.315-7.34-3.315-3.078 0-5.564 1.065-7.458 3.196-1.894 2.131-2.842 4.499-2.842 7.103zm105.002-6.629c0 4.814-1.223 8.405-3.669 10.773-2.368 2.289-5.012 3.433-7.932 3.433h-28.057c0 2.21 1.302 4.065 3.906 5.564 2.605 1.5 5.209 2.249 7.814 2.249 4.577 0 8.168-.473 10.773-1.42l1.302-.474c1.894-.868 3.473-1.302 4.735-1.302 2.526 0 4.696 1.776 6.512 5.327 1.026 2.131 1.539 3.946 1.539 5.446 0 7.024-8.406 10.536-25.216 10.536-5.841 0-11.049-.986-15.627-2.959-4.499-2.052-8.011-4.736-10.536-8.051-4.972-6.392-7.458-13.535-7.458-21.427 0-9.944 3.196-17.876 9.589-23.795 6.471-5.998 14.522-8.998 24.15-8.998 10.97 0 19.02 3.868 24.15 11.602 2.684 4.104 4.025 8.603 4.025 13.496zm-24.979 3.433c3 0 4.499-1.263 4.499-3.788 0-1.815-.71-3.276-2.131-4.38-1.342-1.105-3.315-1.658-5.919-1.658-2.526 0-5.051 1.066-7.577 3.197-2.525 2.052-3.788 4.261-3.788 6.629h14.916zm26.784-46.17c0-1.815.039-3.157.118-4.025.158-.947.513-2.012 1.066-3.196 1.105-2.131 4.183-3.197 9.234-3.197 4.814 0 7.813 1.066 8.997 3.197.631 1.184.986 2.25 1.065 3.196.158.947.237 2.328.237 4.144v54.811c0 2.842.237 4.657.71 5.446.474.71 1.5 1.066 3.078 1.066 1.658 0 2.763.079 3.315.236.553.079 1.223.395 2.013.947 1.578 1.026 2.367 3.828 2.367 8.406 0 4.972-.789 8.01-2.367 9.115-2.052 1.421-6.945 1.658-14.68.711-6.077-.79-10.023-2.802-11.838-6.038-2.21-3.867-3.315-10.023-3.315-18.468v-56.35z"
                fill="#FF9595"
              ></path>
              <path
                d="M323.507 150.504l-17.2-1.536-3.456-4.223-.383-88.69h19.964l1.075 11.902v82.547zM238.81 207.4c.713.713 1.07 2.182 1.07 4.407v.252c0 1.008-.042 1.763-.126 2.267-.042.462-.252 1.028-.629 1.7-.63 1.217-2.225 1.826-4.786 1.826-2.519 0-4.198-.399-5.037-1.196-.798-.798-1.197-2.309-1.197-4.534v-.252c0-.965.021-1.7.063-2.204.084-.503.294-1.07.63-1.7.63-1.259 2.204-1.889 4.723-1.889 2.56 0 4.323.441 5.289 1.323zm43.243-22.542c2.687 1.175 4.03 2.623 4.03 4.344 0 .714-.336 1.868-1.008 3.464a135.68 135.68 0 00-1.7 4.092l-6.926 16.875c-.63 1.847-1.679 3.149-3.148 3.904-.63.294-1.427.441-2.393.441-.965 0-1.91-.357-2.833-1.07-.882-.756-1.47-1.512-1.763-2.267l-.504-1.071c-.336-.839-1.574-4.113-3.715-9.822-.42 1.007-1.05 2.665-1.889 4.974-.798 2.267-1.322 3.694-1.574 4.282-.21.545-.357.923-.441 1.133-.042.168-.21.504-.504 1.007a6.46 6.46 0 01-1.007 1.323c-1.008 1.007-2.162 1.511-3.463 1.511-1.302 0-2.393-.357-3.275-1.07-.881-.756-1.469-1.512-1.763-2.267l-9.507-23.172c-.42-1.259-.63-2.078-.63-2.455 0-1.68 1.196-3.002 3.589-3.967 1.343-.546 2.435-.819 3.274-.819.84 0 1.511.189 2.015.567.546.336.924.692 1.133 1.07.21.336.378.693.504 1.071.714 1.679 2.204 5.625 4.471 11.837l3.715-10.2a4.92 4.92 0 011.385-2.204c1.217-1.217 2.456-1.826 3.715-1.826s2.33.336 3.211 1.007c.924.672 1.553 1.344 1.889 2.015l.504 1.071c2.099 5.877 3.337 9.235 3.715 10.074l3.841-10.452c1.007-2.687 2.519-4.03 4.533-4.03.798 0 1.638.21 2.519.63zm24.647 3.274c.252-2.351 1.91-3.526 4.975-3.526 1.637 0 2.854.126 3.652.378.797.252 1.343.692 1.637 1.322.336.63.525 1.196.567 1.7.083.462.125 1.175.125 2.141v22.038c0 .966-.042 1.7-.125 2.204-.042.462-.21 1.007-.504 1.637-.588 1.091-2.036 1.637-4.345 1.637-2.267 0-3.799-.273-4.596-.818-.756-.588-1.197-1.428-1.323-2.519-1.553 2.225-4.155 3.337-7.807 3.337-3.611 0-6.969-1.658-10.075-4.974-3.106-3.316-4.66-7.157-4.66-11.523 0-4.408 1.554-8.249 4.66-11.523 3.148-3.316 6.59-4.974 10.326-4.974 1.428 0 2.729.252 3.904.756 1.176.503 1.994.986 2.456 1.448.462.42.84.839 1.133 1.259zm-11.459 13.097c0 1.385.545 2.645 1.637 3.778 1.091 1.091 2.413 1.637 3.967 1.637 1.553 0 2.833-.567 3.84-1.7 1.05-1.133 1.575-2.372 1.575-3.715 0-1.385-.504-2.666-1.512-3.841-.965-1.175-2.287-1.763-3.966-1.763-1.638 0-2.981.588-4.03 1.763-1.008 1.175-1.511 2.456-1.511 3.841zm43.553-5.478l-4.092-.252v8.689c0 1.134.167 1.952.503 2.456.378.504 1.05.756 2.015.756 1.008 0 1.763.042 2.267.126.546.042 1.112.23 1.7.566.966.546 1.448 1.952 1.448 4.219 0 2.645-.587 4.261-1.763 4.848-.629.294-1.196.483-1.7.567-.462.042-1.154.063-2.078.063-4.365 0-7.682-.986-9.948-2.959-2.267-1.973-3.401-5.31-3.401-10.012v-9.319a16.56 16.56 0 01-2.581.189c-.924 0-1.7-.357-2.33-1.07-.588-.714-.881-1.931-.881-3.652 0-1.722.105-2.96.314-3.715.21-.798.504-1.365.882-1.701.672-.545 1.511-.818 2.519-.818l2.077.252v-6.486c0-.965.021-1.679.063-2.141.084-.461.294-.965.63-1.511.546-1.049 2.162-1.574 4.848-1.574 2.855 0 4.555.777 5.101 2.33.21.671.315 1.742.315 3.211v6.171c1.847-.168 3.232-.252 4.155-.252.966 0 1.679.042 2.141.126.504.042 1.071.231 1.7.567 1.092.545 1.637 2.161 1.637 4.848 0 2.644-.566 4.261-1.7 4.848-.629.294-1.196.483-1.7.567-.462.042-1.175.063-2.141.063zm15.03 5.478c0 1.763.587 3.148 1.763 4.156 1.175.965 2.413 1.448 3.715 1.448a6.568 6.568 0 003.715-1.133c1.175-.798 2.119-1.197 2.833-1.197 1.259 0 2.792 1.113 4.597 3.337.965 1.218 1.448 2.309 1.448 3.275 0 1.595-1.155 3.085-3.463 4.47-2.393 1.679-5.331 2.519-8.816 2.519-3.903 0-7.66-1.406-11.27-4.219-1.722-1.343-3.128-3.127-4.219-5.352-1.092-2.267-1.637-4.743-1.637-7.43 0-2.728.545-5.184 1.637-7.367 1.091-2.225 2.497-4.009 4.219-5.352 3.484-2.771 7.199-4.156 11.144-4.156 1.596 0 3.149.231 4.66.693 1.511.42 2.624.839 3.337 1.259l1.008.63c.755.504 1.343.902 1.763 1.196 1.091.84 1.637 1.805 1.637 2.897 0 1.049-.441 2.245-1.322 3.589-1.512 2.308-2.96 3.463-4.345 3.463-.798 0-1.931-.462-3.4-1.385-.756-.714-1.847-1.071-3.275-1.071-1.385 0-2.686.504-3.903 1.511-1.218 1.008-1.826 2.414-1.826 4.219zm37.007-16.497c4.198 0 7.682 1.595 10.453 4.785 2.812 3.191 4.218 7.094 4.218 11.712v11.082c0 .965-.042 1.7-.126 2.204-.041.462-.23 1.007-.566 1.637-.546 1.091-2.162 1.637-4.849 1.637-2.56 0-4.155-.546-4.785-1.637-.336-.63-.546-1.196-.63-1.7-.042-.504-.063-1.259-.063-2.267v-11.019c0-1.721-.482-3.064-1.448-4.03-.965-.965-2.204-1.448-3.715-1.448a6.01 6.01 0 00-3.904 1.385c-1.133.882-1.784 1.889-1.952 3.023v12.215c0 .965-.042 1.7-.126 2.204-.042.462-.23 1.007-.566 1.637-.546 1.091-2.162 1.637-4.849 1.637-2.644 0-4.26-.567-4.848-1.7-.294-.63-.483-1.175-.567-1.637-.042-.462-.063-1.196-.063-2.204v-37.654c0-.965.021-1.679.063-2.14.084-.504.273-1.05.567-1.638.588-1.133 2.225-1.7 4.911-1.7 2.645 0 4.24.567 4.786 1.7.336.63.524 1.197.566 1.7.084.462.126 1.176.126 2.141v13.916c2.099-2.561 4.555-3.841 7.367-3.841z"
                fill="#FF9595"
              ></path>
              <path
                d="M434.074 80.07c-1.174-.204-2.162-.706-2.985-1.337l-.127.09c-1.326.922-2.863 1.304-4.429 1.304-1.619 0-3.016-.419-4.194-1.1-1.213.775-2.589 1.1-3.977 1.1a7.245 7.245 0 01-3.935-1.124l-.153.092c-1.264.739-2.671 1.032-4.083 1.032-1.631 0-3.055-.4-4.26-1.086-1.194.763-2.546 1.086-3.911 1.086-1.553 0-2.905-.38-4.051-1.024l-.146.089c-1.287.76-2.713 1.012-4.116.933-2.576-.048-4.334-1.426-5.493-2.922-.894-1.152-1.654-2.675-2.301-3.972l-.225-.448-.027-.055-.026-.055c-3.089-6.663-6.037-16.87-4.2-25.577.95-4.505 3.226-8.77 7.537-11.72 4.249-2.908 10.009-4.221 17.341-3.823 13.036.707 22.488 7.352 28.581 15.34 6.001 7.869 8.937 17.278 8.897 24.187l.001.16c.006 1.013.019 3.478-1.164 5.538a6.723 6.723 0 01-3.552 2.997c-1.568.577-3.278.595-5.002.295zM25.076 80.07c1.174-.204 2.161-.706 2.984-1.337l.127.09c1.327.922 2.864 1.304 4.429 1.304 1.62 0 3.017-.419 4.194-1.1 1.213.775 2.59 1.1 3.977 1.1 1.546 0 2.854-.44 3.936-1.124.05.031.101.062.153.092 1.263.739 2.67 1.032 4.083 1.032 1.63 0 3.054-.4 4.26-1.086 1.194.763 2.545 1.086 3.91 1.086 1.553 0 2.905-.38 4.051-1.024l.146.089c1.287.76 2.714 1.012 4.116.933 2.576-.048 4.334-1.426 5.494-2.922.893-1.152 1.653-2.675 2.3-3.972l.225-.448.028-.055.025-.055c3.09-6.663 6.038-16.87 4.2-25.577-.95-4.505-3.226-8.77-7.537-11.72-4.248-2.908-10.01-4.221-17.34-3.823-13.037.707-22.489 7.352-28.582 15.34-6.001 7.869-8.937 17.278-8.897 24.187v.16c-.006 1.013-.02 3.478 1.164 5.538a6.72 6.72 0 003.552 2.997c1.567.577 3.278.595 5.002.295z"
                fill="#fff"
                stroke="#FF9595"
                stroke-width="7.679"
              ></path>
            </svg>
          </h1>
          <span className="drop-shadow-outline text-sm text-brand-primary">
            New website coming soon...
          </span>
          <div className="flex items-center justify-center space-x-4 text-center">
            <a
              href="https://www.instagram.com/sonnyangel.watch/"
              target="_blank"
              rel="noreferrer nopener"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary p-2 text-white"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-current"
              >
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@sonnyangel.watch"
              target="_blank"
              rel="noreferrer nopener"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary p-2 text-white"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-current"
              >
                <title>TikTok</title>
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
