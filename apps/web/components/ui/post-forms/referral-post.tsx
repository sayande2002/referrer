"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import * as z from "zod";

import { cn } from "@referrer/lib/utils/cn";
import {
  Button,
  Calendar,
  Checkbox,
  Form,
  FormControl,
  FormCustomMessage,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  Separator,
} from "@referrer/ui";

import { referralPostValidator } from "@/lib/validators";

import { accept, experienceOptionsObj, jobTypeList, jobTypeOptionsObj, links, pdfs } from "@/config";

import { useStore } from "@/store/store";

import { Required } from "../required";
import { sonerToast } from "../soner-toast";
import { AsyncSelectComponent } from "./async-select";
import { SelectComponent } from "./select";

export const ReferralPost = () => {
  const setAuthDialogOpen = useStore((state) => state.setAuthDialogOpen);
  const setAuthDialogTitle = useStore((state) => state.setAuthDialogTitle);
  const form = useForm<z.infer<typeof referralPostValidator>>({
    resolver: zodResolver(referralPostValidator),
    defaultValues: {
      content: {
        desc: "",
      },
      role: "",
      experience: "",
      range: "",
      companyName: "",
      jobCode: "",
      jobType: "",
      location: null,
      countryLocation: "",
      stateLocation: "",
      cityLocation: "",
      skills: [],
      accept: ["shortMessage"],
      pdfs: ["resume"],
      links: ["linkedin"],
      // stars: 0,
      // limit: 0,
    },
  });

  // console.log("jobType", form.watch().jobType);
  // console.log("skills", form.watch().skills);
  const [countryiso2, setcountryiso2] = useState("");
  const [stateiso2, setstateiso2] = useState("");
  const mapResponseToValuesAndLabels = (data) => ({
    value: data.name,
    label: data.name,
    iso2: data?.iso2,
  });

  async function countriesList(value) {
    const data = await fetch("https://api.countrystatecity.in/v1/countries", {
      method: "GET",
      headers: {
        "X-CSCAPI-KEY": "cGI0bzZlY3JDWUNkT2lNak9SOHZnVHNQam5QYnREQUhseEtNUzducg==",
      },
      redirect: "follow",
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((result) => result.map(mapResponseToValuesAndLabels))
      .then((final) => final.filter((i) => i.label.toLowerCase().includes(value.toLowerCase())));
    return data;
  }

  async function statesList(value) {
    const data = await fetch(
      `https://api.countrystatecity.in/v1${countryiso2 ? `/countries/${countryiso2}` : ""}/states`,
      {
        method: "GET",
        headers: {
          "X-CSCAPI-KEY": "cGI0bzZlY3JDWUNkT2lNak9SOHZnVHNQam5QYnREQUhseEtNUzducg==",
        },
        redirect: "follow",
        cache: "no-store",
      }
    )
      .then((response) => response.json())
      .then((result) => result.map(mapResponseToValuesAndLabels))
      .then((final) => final.filter((i) => i.label.toLowerCase().includes(value.toLowerCase())));
    return data;
  }

  async function cityList(value) {
    const data = await fetch(
      `https://api.countrystatecity.in/v1${
        stateiso2 ? `/countries/${countryiso2}/states/${stateiso2}` : `/countries/${countryiso2}`
      }/cities`,
      {
        method: "GET",
        headers: {
          "X-CSCAPI-KEY": "cGI0bzZlY3JDWUNkT2lNak9SOHZnVHNQam5QYnREQUhseEtNUzducg==",
        },
        redirect: "follow",
        cache: "no-store",
      }
    )
      .then((response) => response.json())
      .then((result) => result.map(mapResponseToValuesAndLabels))
      .then((final) => final.filter((i) => i.label.toLowerCase().includes(value.toLowerCase())));
    return data;
  }

  async function onSubmit(values: z.infer<typeof referralPostValidator>) {
    try {
      //   await createReferralPost({
      //     content: values.desscription,
      //     expiresAt: values.expiresAt,
      //     role: values.role,
      //     jobType: values.jobType,
      //     experience: values.experience,
      //     location: values.location,
      //     stars: values.stars,
      //     limit: values.limit,
      //     pdfs: values.pdfs,
      //     links: values.links,
      //     postType: "referralPost",
      //   });
      console.log(values);
      sonerToast({
        severity: "success",
        title: "Sucess !",
        message: "You have Sucessfully posted a Referral",
      });
      form.reset();
    } catch (err) {
      setAuthDialogTitle("Post");
      setAuthDialogOpen(true);
    }
  }

  return (
    <div className="mb-20">
      <div className="mx-auto my-5 w-11/12">
        <h2 className="mb-3 text-2xl font-bold capitalize tracking-tight">Referral Post</h2>
        <p className="text-muted-foreground mb-2">Post a new referral now and open oppotunies to others !</p>
        <Separator />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex w-11/12 flex-col justify-center gap-6">
          {/* Description */}
          <FormField
            control={form.control}
            name="content.desc"
            render={({ field }) => (
              <FormItem className="my-2">
                <FormLabel>
                  Desctiption
                  <Required />
                </FormLabel>
                <FormControl>
                  <TextareaAutosize
                    cacheMeasurements
                    minRows={5}
                    maxRows={30}
                    className="border-input placeholder:text-muted-foreground focus-visible:ring-ring
                    flex w-full rounded-md border bg-transparent px-3 text-sm
                    shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-lg"
                    placeholder="Desscription of the referral. . . . . . ."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>This is the description of the referral.</FormDescription>
              </FormItem>
            )}
          />
          <p className="text-sm text-gray-500">
            Add <kbd className="bg-muted rounded-md border px-1 text-xs uppercase">Tab</kbd> Image.
          </p>
          <Separator />
          <h5 className="mb-2 font-bold tracking-tight">
            This will help your referral to reach to many users
          </h5>
          <div className="my-2 grid w-full grid-cols-3 items-center gap-4">
            {/* Job Role */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Job Role
                    <Required />
                  </FormLabel>
                  <SelectComponent
                    createAble={true}
                    isMulti={false}
                    value={field.value}
                    options={jobTypeList}
                    onChange={field.onChange}
                    placeholder="Select Job Role"
                    {...field}
                  />
                  {/* <FormMessage /> */}
                  <FormCustomMessage>Required</FormCustomMessage>
                  <FormDescription>Select the job Role.</FormDescription>
                </FormItem>
              )}
            />
            {/* Job Experience */}
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Experience level
                    <Required />
                  </FormLabel>
                  <SelectComponent
                    createAble={true}
                    isMulti={false}
                    value={field.value}
                    options={experienceOptionsObj}
                    onChange={field.onChange}
                    placeholder="Select Experience level"
                    {...field}
                  />
                  {/* <FormMessage /> */}
                  <FormCustomMessage>Required</FormCustomMessage>
                  <FormDescription>Select the job type.</FormDescription>
                </FormItem>
              )}
            />
            {/* Salary Range */}
            <FormField
              control={form.control}
              name="range"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Salary Range
                    <Required />
                  </FormLabel>
                  <SelectComponent
                    createAble={true}
                    isMulti={false}
                    value={field.value}
                    options={jobTypeList}
                    onChange={field.onChange}
                    placeholder="Select Salary Range"
                    {...field}
                  />
                  {/* <FormMessage /> */}
                  <FormCustomMessage>Required</FormCustomMessage>
                  <FormDescription>Select the salary Range.</FormDescription>
                </FormItem>
              )}
            />
          </div>
          <Separator />
          <div className="my-2 grid w-full grid-cols-3 items-center gap-4">
            {/* Conpany Name */}
            {/* <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="mb-2">
                    Company Name
                    <Required />
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[300px] justify-between",
                            !field.value && "text-muted-foreground"
                          )}>
                          {field.value
                            ? countries.find((language) => language.value === field.value)?.label
                            : "Select Company"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="h-[220px] w-[300px] p-0">
                      <Command>
                        <CommandInput placeholder="Search Companies..." />
                        <CommandEmpty>No locations found.</CommandEmpty>
                        <CommandGroup>
                          {countries.map((language) => (
                            <CommandItem
                              value={language.label}
                              key={language.label}
                              onSelect={() => {
                                form.setValue("companyName", language.value);
                              }}>
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  language.value === field.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {language.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>This is the locations for the referral.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Conpany Name
                    <Required />
                  </FormLabel>
                  <SelectComponent
                    createAble={true}
                    isMulti={false}
                    value={field.value}
                    options={jobTypeList}
                    onChange={field.onChange}
                    placeholder="Select Conpany Name"
                    {...field}
                  />
                  {/* <FormMessage /> */}
                  <FormCustomMessage>Required</FormCustomMessage>
                  <FormDescription>Select the Conpany Name.</FormDescription>
                </FormItem>
              )}
            />
            {/* Job Code */}
            <FormField
              control={form.control}
              name="jobCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Job Code" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>This is the job listing code.</FormDescription>
                </FormItem>
              )}
            />
            {/* Job Type */}
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Job Type
                    <Required />
                  </FormLabel>
                  <SelectComponent
                    createAble={true}
                    isMulti={false}
                    value={field.value}
                    options={jobTypeOptionsObj}
                    onChange={field.onChange}
                    placeholder="Select Job Type"
                    {...field}
                  />
                  {/* <FormMessage /> */}
                  <FormCustomMessage>Required</FormCustomMessage>
                  <FormDescription>Select the job type.</FormDescription>
                </FormItem>
              )}
            />
          </div>
          <Separator />
          <h5 className="mb-2 font-bold tracking-tight">Select the location of the referral</h5>
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  Location <Required />
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    // defaultValue={field.value}
                    className="flex items-center justify-center gap-8">
                    <FormItem className="flex items-center justify-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Remote" />
                      </FormControl>
                      <FormLabel className="font-normal">Remote</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center justify-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Hybrid" />
                      </FormControl>
                      <FormLabel className="font-normal">Hybrid</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center justify-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="On-site" />
                      </FormControl>
                      <FormLabel className="font-normal">On-site</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
                <div className="flex w-full justify-center">
                  <FormDescription>Select a Location type for the referral.</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <div className="my-2 grid w-full grid-cols-3 items-center gap-4">
            {/* Country Location */}
            <FormField
              control={form.control}
              name="countryLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={form.getValues("countryLocation") ? "text-foreground" : ""}>
                    Country Location <Required />
                  </FormLabel>
                  <AsyncSelectComponent
                    isMulti={false}
                    loadOptions={countriesList}
                    onChange={(data) => {
                      console.log("onChange==================", data);
                      form.setValue("countryLocation", data?.value);
                      setcountryiso2(data?.iso2);
                    }}
                    placeholder="📍 Select Country"
                    defaultOptions
                  />
                  {/* <FormMessage /> */}
                  {form.getValues("countryLocation") ? (
                    <></>
                  ) : (
                    <FormCustomMessage>Required</FormCustomMessage>
                  )}
                  <FormDescription>Select a Country Location.</FormDescription>
                </FormItem>
              )}
            />
            {/* State Location */}
            <FormField
              control={form.control}
              name="stateLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={form.getValues("stateLocation") ? "text-foreground" : ""}>
                    State Location
                  </FormLabel>
                  <AsyncSelectComponent
                    isMulti={false}
                    loadOptions={statesList}
                    onChange={(data) => {
                      console.log("onChange==================", data);
                      form.setValue("stateLocation", data?.value);
                      setstateiso2(data?.iso2);
                    }}
                    placeholder="📍 Select State"
                    defaultOptions={countryiso2 ? true : false}
                  />
                  {/* <FormMessage /> */}
                  {form.getValues("stateLocation") ? <></> : <FormCustomMessage>Required</FormCustomMessage>}
                  <FormDescription>Select a State Location.</FormDescription>
                </FormItem>
              )}
            />
            {/* City Location */}
            <FormField
              control={form.control}
              name="cityLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={form.getValues("cityLocation") ? "text-foreground" : ""}>
                    City Location
                  </FormLabel>
                  <AsyncSelectComponent
                    isMulti={false}
                    loadOptions={cityList}
                    placeholder="📍 Select City"
                    onChange={(data) => {
                      form.setValue("cityLocation", data?.value);
                    }}
                    defaultOptions={false}
                    isDisabled={form.getValues("countryLocation") ? false : true}
                  />
                  {/* <FormMessage /> */}
                  {form.getValues("cityLocation") ? <></> : <FormCustomMessage>Required</FormCustomMessage>}
                  <FormDescription>Select Country to choose a City.</FormDescription>
                </FormItem>
              )}
            />
          </div>
          <Separator />
          {/* Skills */}
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem className="my-2">
                <FormLabel>
                  Skills
                  <Required />
                </FormLabel>
                <SelectComponent
                  createAble={true}
                  isMulti={true}
                  value={field.value}
                  options={jobTypeList}
                  onChange={field.onChange}
                  placeholder="Select Skills"
                  {...field}
                />
                <FormMessage />
                <FormDescription>Select the Skills Required.</FormDescription>
              </FormItem>
            )}
          />
          <Separator />
          {/* Accept */}
          <FormField
            control={form.control}
            name="accept"
            render={() => (
              <FormItem className="my-2">
                <FormLabel>
                  Accept
                  <Required />
                </FormLabel>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {accept.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="accept"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(field.value?.filter((value) => value !== item.id));
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
                <FormDescription>Select the items you want to accept from applicant.</FormDescription>
              </FormItem>
            )}
          />
          {/* Accept PDFs */}
          <FormField
            control={form.control}
            name="pdfs"
            render={() => (
              <FormItem className="my-2">
                <FormLabel>
                  Accept PDFs
                  <Required />
                </FormLabel>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {pdfs.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="pdfs"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(field.value?.filter((value) => value !== item.id));
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
                <FormDescription>Select the items you want to accept from applicant.</FormDescription>
              </FormItem>
            )}
          />
          {/* Accept Links */}
          <FormField
            control={form.control}
            name="links"
            render={() => (
              <FormItem className="my-2">
                <FormLabel>
                  Accept Links
                  <Required />
                </FormLabel>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {links.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="links"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(field.value?.filter((value) => value !== item.id));
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
                <FormDescription>Select the items you want to accept from applicant.</FormDescription>
              </FormItem>
            )}
          />
          <Separator />
          {/* Deadline of Post */}
          <FormField
            control={form.control}
            name="expiresAt"
            render={({ field }) => (
              <FormItem className="mx-auto my-2 flex flex-col">
                <FormLabel>Deadline of Post</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}>
                        {field.value ? format(field.value, "PPP") : <span>Pick the deadline date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
                <FormDescription>Select the deadline of the Post.</FormDescription>
              </FormItem>
            )}
          />
          <Separator />
          <div className="my-2 grid w-full grid-cols-2 items-center gap-4">
            {/* Stars */}
            <FormField
              control={form.control}
              name="stars"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stars</FormLabel>
                  <FormControl>
                    <Input placeholder="Stars ⭐" type="number" className="" value={field.value} {...field} />
                  </FormControl>
                  <FormDescription>Number of Stars you want to accept.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Limit */}
            <FormField
              control={form.control}
              name="limit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Limit</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Accepting Limit"
                      type="number"
                      className=""
                      value={field.value}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Number of proposal you want to accept.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Submit */}
          <Separator />
          <div className="flex flex-col items-center justify-center">
            <Button className="bg-foreground my-2 w-6/12" type="submit">
              Post
            </Button>
            <Button className="bg-foreground my-2 w-6/12">Save as Draft</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
