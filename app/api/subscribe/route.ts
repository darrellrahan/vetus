import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: "07589670f62196f9d473d8cd9d316727-us21",
  server: "us21",
});

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) new Response(JSON.stringify({ error: "Email is required" }));

  try {
    const res = await mailchimp.lists.addListMember("334cf2a72c", {
      email_address: email,
      status: "subscribed",
    });

    return new Response(JSON.stringify({ res }));
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: JSON.parse(error.response.text) })
    );
  }
}
