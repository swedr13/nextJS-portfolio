import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET () {
  try {
    const data = await prisma.project.findMany();

    if (!data) {
      return new Response("No data available.", { status: 500 })
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Process Error.", { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const { title, description, githubLink } = body;

    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        githubLink
      }
    })

    return new Response(JSON.stringify(newProject), { status: 200 });
  } catch (error) {
    return new Response(`Process Error: ${error}.`, {status: 500})
  }
}