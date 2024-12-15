# Aspects (Cross Cutting Consern)

According to *Mark Seeman* in his book **Dependency Injection Principles, Practices, and Patterns** (if you want to read it yourself, you can find it in the public folder under **/public/pdfs/otros/08_2019_Mark Seemann, Steven van Deursen - Dependency Injection Principles, Practices, and Patterns**), Aspect-Oriented Programming (AOP) aims to reduce the boilerplate code required for implementing cross-cutting concerns and other coding patterns.

AOP accomplishes this by centralizing the implementation of such patterns in a single location and applying them to a codebase either declaratively or by convention, without modifying the code itself.

They are stated in the following Cross Cutting Consern

## 1. Auditing

Although you could implement auditing around Repositories, as you
did in the AuditingUserRepositoryDecorator of listing 9.1, this presents a list
of changes to individual Entities, and you lose the overall picture — that is, why
the change happened. Reporting changes to individual Entities might be suited
for CRUD-based applications, but if the application implements more-complex
Cross cutting consern (According to Millet) use cases that influence more than a single Entity, it becomes beneficial to pull
auditing a level up and store information about the executed command. We’ll
show an auditing example next.

<p align="center">
    <img src="../../public/aspects/Aspectos-%20audit.svg" heigth=200 alt="auditing" />
</p>

## 2. Logging 
As we alluded to in section 5.3.2, a good application design can prevent
unnecessary logging statements spread across the entire code base. Logging any
executed business operation with its data provides you with detailed information
about the call, which typically removes the need to log at the start of each method.

<p align="center">
    <img src="../../public/aspects/Aspectos - logger.svg" heigth=200 alt="logger" />
</p>

## 3. Performance monitoring
Since 99% of the time executing a request is typically
spent running the business operation itself, ICommandService<TCommand>
becomes an ideal boundary for plugging in performance monitoring.

<p align="center">
    <img src="../../public/aspects/Aspectos Performance.svg" heigth=200 alt="performance" />
</p>

## 4. Security
Although you might try to restrict access on the level of the repository,
this is typically too fine-grained, because you more likely want to restrict access at
the level of the business operation. You can mark your commands with either a
permitted role or a permission, which makes it trivial to apply security concerns
around all business operations using a single Decorator. We’ll show an example
shortly.

<p align="center">
    <img src="../../public/aspects/Aspectos Security.svg" heigth=200 alt="security" />
</p>

## 5. Fault tolerance
Because you want to apply transactions around your business
operations, as we’ve shown in listing 10.15, other fault-tolerant aspects should
typically be applied on the same level. Implementing a database deadlock retry
aspect, for instance, is a good example. Such a mechanism should always be
applied around a transaction aspect.

<p align="center">
    <img src="../../public/aspects/Aspectos Error Fault.svg" heigth=200 alt="fault tolerance" />
</p>

## 6. Validation 
As we demonstrated in listings 10.9 and 10.14, the command can
become part of the web request’s submitted data. By enriching commands with
Data Annotations’ attributes, the command’s data will also be validated by MVC.9
As an extra safety measure, you can create a Decorator that validates an incoming
command using Data Annotations’ static Validator class.

<p align="center">
    <img src="../../public/aspects/Aspectos Error Fault.svg" heigth=200 alt="fault tolerance" />
</p>


## Diagram

All the aspects are presented in a single diagram. These diagrams have been created by me, using the concepts of Mark Seeman as discussed in his book Dependency Injection Principles, Practices, and Patterns

![diagram](../../public/aspects/Diagrama%20de%20secuencia%20-%20Aspectos.svg)

## How To use it?

```bash
# Execute the following command
ts-node .\client.ts
```