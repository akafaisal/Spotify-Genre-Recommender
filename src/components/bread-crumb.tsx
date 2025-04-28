import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export const Breadcrumbs = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList className=" font-semibold text-sm lg:text-l bg-gradient-to-r from-white to-gray-100  outline-2  outline-black rounded-3xl px-3 py-1 ">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Main Page</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Fortune</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Game</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
