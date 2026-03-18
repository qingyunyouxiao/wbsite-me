## React

这个在网上都能搜到的，简单写一下。

**step 1**

```bash
sudo nano /etc/hosts
```

然后：

1. 用键盘方向键移动到底部
2. 粘贴这行：`199.232.68.133 raw.githubusercontent.com`
3. 按 `Ctrl + X` 退出
4. 按 `Y` 确认保存
5. 按 `Enter` 确认文件名

**step 2**

```bash
NVM_SOURCE=https://gitee.com/mirrors/nvm.git bash -c "$(curl -fsSL https://gitee.com/mirrors/nvm/raw/master/install.sh)"
```

**step 3**

```bash
echo 'export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node' >> ~/.bashrc
source ~/.bashrc
```

**step 4**

```bash
nvm install --lts
npm install -g yarn
```

**step 5**

```bash
yarn create react-app my-app
cd my-app
echo "SKIP_PREFLIGHT_CHECK=true" > .env
yarn start
```