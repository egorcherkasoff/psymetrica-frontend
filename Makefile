dev:
	pnpm run dev

preview:
	pnpm run build && pnpm run preview

build:
	docker-compose build && docker-compose up --remove-orphans

up:
	docker-compose up

down:
	docker-compose down