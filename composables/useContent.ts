export const useContent = () => {
  const { data: projects } = useAsyncData("project", async () => {
    return queryCollection("project").order("name", "ASC").all();
  });

  const { data: profile } = useAsyncData("profile", async () => {
    return queryCollection("profile").first();
  });

  const getProject = (slug: string) =>
    queryCollection("project").where("slug", "=", slug).first();

  const { data: experiences } = useAsyncData("experience", () => {
    return queryCollection("experience").order("role", "ASC").all();
  });

  const { data: certifications } = useAsyncData("certification", () => {
    return queryCollection("certification").order("date", "ASC").all();
  });

  const { data: stacks } = useAsyncData("stack", async () => {
    return queryCollection("stack").first();
  });

  return {
    profile,
    socials: profile?.value?.socials,
    contacts: profile?.value?.contacts,
    projects,
    getProject,
    experiences,
    certifications,
    stacks,
  };
};
