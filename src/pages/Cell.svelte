<template>
  <div class="demo">
    <Group title="带说明的列表">
      <Cell title="标题文字" value="说明文字"></Cell>
      <Cell title="标题文字" value="说明文字" swiped={true}></Cell>
    </Group>
    <Group title="带图标的列表项">
      <Cell value="说明文字">
      <span>
        <Icon></Icon>
        标题文字
      </span>
      </Cell>
      <Cell value="说明文字">
      <span >
        <Icon></Icon>
        标题文字
      </span>
      </Cell>
    </Group>
    <Group title={"带跳转的列表项"}>
      <Cell title="标题文字" isLink></Cell>
      <Cell title="标题文字" isLink></Cell>
    </Group>
    <Group title={"带说明、跳转的列表项"}>
      <Cell title="标题文字" value="说明文字" isLink></Cell>
      <Cell title="标题文字" value="说明文字" isLink></Cell>
    </Group>
    <Group title={"带跳转的列表项"}>
      <Cell title="标题文字" value="说明文字" isLink>
        <span slot="header"><Icon></Icon></span>
      </Cell>
      <Cell title="标题文字" value="说明文字" isLink>
        <span slot="header"><Icon></Icon></span>
      </Cell>
    </Group>
  </div>
</template>

<script>
  import Icon from "../components/Icon/Icon.svelte";
  import Group from "../components/Cell/Group.svelte";
  import Cell from "../components/Cell/Cell.svelte";
</script>

<style>
  .demo {
    background: #eeeeee;
    padding:0 0 40px;
  }
</style>