<script lang="ts">
	type Props = {
		isCorrect: boolean;
		userInput: string;
		handleInput: () => void;
	};

	let { isCorrect, userInput = $bindable(), handleInput }: Props = $props();
</script>

<div class="wrapper" data-correct-input={isCorrect}>
	<input
		type="text"
		class="input"
		bind:value={userInput}
		oninput={handleInput}
		placeholder="タイ文字を入力！"
		lang="th"
		disabled={isCorrect}
	/>
</div>

<style>
	.wrapper {
		gap: calc(var(--spacing-1) * 1px);
		border-radius: calc(var(--border-radius) * 1px);
		border: 1px solid var(--color-gray);
		&:focus-within {
			border-color: var(--color-input);
		}
		&[data-correct-input='true'] {
			border-color: var(--color-success);
			background-color: var(--color-success-10);
		}
	}
	@media (min-width: 640px) {
		.wrapper {
			border: 2px solid var(--color-gray);
			box-shadow: 0 0 8px var(--color-gray);
			&:focus-within {
				box-shadow: 0 0 8px var(--color-input);
			}
			&[data-correct-input='true'] {
				box-shadow: 0 0 8px var(--color-success);
			}
		}
	}
	@media (max-width: 639px) {
		.wrapper {
			border: calc(var(--calc-sp) * 2) solid var(--color-gray);
			&:focus-within {
				box-shadow: 0 0 calc(var(--calc-sp) * 8) var(--color-input);
			}
			&[data-correct-input='true'] {
				box-shadow: 0 0 calc(var(--calc-sp) * 8) var(--color-success);
			}
		}
	}
	.input {
		font-size: 16px;
		width: 100%;
	}
	@media (min-width: 640px) {
		.input {
			padding: calc(var(--spacing-2) * 1px);
			border-radius: calc(var(--border-radius) * 1px);
		}
	}
	@media (max-width: 639px) {
		.input {
			padding: calc(var(--calc-sp) * var(--spacing-2));
			border-radius: calc(var(--border-radius) * var(--calc-sp));
		}
	}
</style>
