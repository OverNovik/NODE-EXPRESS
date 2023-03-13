run:
	docker run -d -p 3000:3000 -v courses:/nodeJS/data --rm --name express overnovik/express

stop:
	docker stop express

dev:
	npm run dev