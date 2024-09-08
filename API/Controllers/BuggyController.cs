using System;
using System.Linq.Expressions;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController(DataContext context) : BaseApiController
{

    //Erorile in intervalul 400-499 sunt considerate erori client side 

    [Authorize]
    [HttpGet("auth")]
    public ActionResult<string> GetAuth()
    {
        return "secret text";
    }


    [HttpGet("not-found")]//404
    public ActionResult<AppUser> GetNotFound()
    {
        var thing = context.Users.Find(-1);

        if(thing == null) return NotFound();

        return thing;
    }

    [HttpGet("server-error")] //400 
    public ActionResult<AppUser> GetServerError()
    {
        var thing = context.Users.Find(-1) ?? throw new Exception ("A bad thing has happened");
        return thing;
    }

    [HttpGet("bad-request")]
    public ActionResult<string> GetBadRequest()
    {
        return BadRequest("This was not a good request");
    }
}