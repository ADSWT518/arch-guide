import{_ as a,c as e,o as s,a as n}from"./app.798ea9af.js";const l="/assets/telegram.4af996c4.png",r="/assets/qq-3.39ea9a36.png",p="/assets/qq-1.45c765aa.png",i="/assets/qq-2.86f28112.png",t="/assets/wechat-1.aebb2b8e.png",o="/assets/wechat-2.65650370.png",c="/assets/skype.51ef8036.png",d="/assets/discord.dd42d00d.png",h="/assets/teamspeak3.9d9e673f.png",u="/assets/slack.fed8a580.png",m="/assets/zoom.168ee9e1.png",b="/assets/meeting-2.4b533584.png",g="/assets/thunderbird.fcb4f111.png",y="/assets/kmail.9466160f.png",S=JSON.parse('{"title":"聊天通讯","description":"","frontmatter":{"sidebarDepth":2,"prev":"/advanced/btrfs.md"},"headers":[{"level":2,"title":"💬 即时通讯","slug":"💬-即时通讯","link":"#💬-即时通讯","children":[{"level":3,"title":"Telegram","slug":"telegram","link":"#telegram","children":[]},{"level":3,"title":"QQ","slug":"qq","link":"#qq","children":[]},{"level":3,"title":"微信","slug":"微信","link":"#微信","children":[]},{"level":3,"title":"Skype","slug":"skype","link":"#skype","children":[]},{"level":3,"title":"Discord","slug":"discord","link":"#discord","children":[]},{"level":3,"title":"TeamSpeak 3","slug":"teamspeak-3","link":"#teamspeak-3","children":[]}]},{"level":2,"title":"🤝🏻 团队合作","slug":"🤝🏻-团队合作","link":"#🤝🏻-团队合作","children":[{"level":3,"title":"Slack","slug":"slack","link":"#slack","children":[]}]},{"level":2,"title":"📹 网络会议","slug":"📹-网络会议","link":"#📹-网络会议","children":[{"level":3,"title":"Zoom","slug":"zoom","link":"#zoom","children":[]},{"level":3,"title":"腾讯会议","slug":"腾讯会议","link":"#腾讯会议","children":[]}]},{"level":2,"title":"✉️ 电子邮件","slug":"✉️-电子邮件","link":"#✉️-电子邮件","children":[{"level":3,"title":"Thunderbird","slug":"thunderbird","link":"#thunderbird","children":[]},{"level":3,"title":"KMail","slug":"kmail","link":"#kmail","children":[]},{"level":3,"title":"Mailspring","slug":"mailspring","link":"#mailspring","children":[]}]}],"relativePath":"apps/communication.md","lastUpdated":1672786685000}'),C={name:"apps/communication.md"},k=n(`<h1 id="聊天通讯" tabindex="-1">聊天通讯 <a class="header-anchor" href="#聊天通讯" aria-hidden="true">#</a></h1><blockquote><h3 id="🍻-海上生明月-天涯共此时" tabindex="-1">🍻 海上生明月，天涯共此时 <a class="header-anchor" href="#🍻-海上生明月-天涯共此时" aria-hidden="true">#</a></h3><p>这一小节讨论在 archlinux 上安装常用的聊天通讯软件</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#💬-即时通讯">💬 即时通讯</a><ul><li><a href="#telegram">Telegram</a></li><li><a href="#qq">QQ</a></li><li><a href="#微信">微信</a></li><li><a href="#skype">Skype</a></li><li><a href="#discord">Discord</a></li><li><a href="#teamspeak-3">TeamSpeak 3</a></li></ul></li><li><a href="#🤝🏻-团队合作">🤝🏻 团队合作</a><ul><li><a href="#slack">Slack</a></li></ul></li><li><a href="#📹-网络会议">📹 网络会议</a><ul><li><a href="#zoom">Zoom</a></li><li><a href="#腾讯会议">腾讯会议</a></li></ul></li><li><a href="#✉️-电子邮件">✉️ 电子邮件</a><ul><li><a href="#thunderbird">Thunderbird</a></li><li><a href="#kmail">KMail</a></li><li><a href="#mailspring">Mailspring</a></li></ul></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="💬-即时通讯" tabindex="-1">💬 即时通讯 <a class="header-anchor" href="#💬-即时通讯" aria-hidden="true">#</a></h2><h3 id="telegram" tabindex="-1">Telegram <a class="header-anchor" href="#telegram" aria-hidden="true">#</a></h3><p>Telegram（电报）是跨平台的即时通信软件。其客户端是自由软件（桌面端在 <a href="https://github.com/telegramdesktop/tdesktop/blob/dev/LICENSE" target="_blank" rel="noreferrer">GPLv3</a> 协议下发布），但服务器是专有软件。</p><p>Telegram 有两种加密模式：</p><ul><li>一般聊天 —— 使用<strong>端到端</strong>的加密通信，但服务端会有访问密钥的权限，而且可以经由多重设备登录</li><li>秘密聊天 —— 使用<strong>端对端</strong>的加密通信，而且只能经由两个特定设备登录</li></ul><p>官方宣称当两名用户进行通信时，第三方包含管理人员皆无法访问用户的通信内容。当用户在进行秘密聊天时，消息包含多媒体皆可以被指定为自毁消息，当消息被用户阅读之后，消息在指定的时间内会自动销毁。一旦消息过期，消息会消失在用户的设备上。</p><ol><li><p>安装 <code>Telegram</code><sup>community / cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-a_mp7" id="tab-aznHhJt" checked="checked"><label for="tab-aznHhJt">sh</label><input type="radio" name="group-a_mp7" id="tab-QehZU7i"><label for="tab-QehZU7i">sh</label><input type="radio" name="group-a_mp7" id="tab-VLotAAp"><label for="tab-VLotAAp">sh</label><input type="radio" name="group-a_mp7" id="tab-U8p0LKg"><label for="tab-U8p0LKg">sh</label></div><div class="blocks"><p>::: code-group-item community</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">telegram-desktop</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item cn (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">telegram-desktop-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">telegram-desktop-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur（dev）</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">telegram-desktop-bin-dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+l+`" alt="telegram"></p></li><li><p>调整隐私权限以及自动下载：</p><ul><li><p>在 <code>Settings</code>（设置） &gt; <code>Advanced</code>（高级） &gt; <code>Automatic media download</code>（自动媒体下载） 中分别将 <code>In private chats</code>（私聊中）、<code>In groups</code>（群组中） 和 <code>In channels</code>（频道中） 的 <code>Files</code>（文件） 关掉，以避免下载病毒以及垃圾文件</p></li><li><p>在 <code>Settings</code>（设置） &gt; <code>Privacy and Security</code>（隐私和安全） &gt; <code>Privacy</code>（隐私） 中将 <code>Phone number</code>（电话号码） 改为 <code>Nobody</code>（仅联系人可见）、将 <code>Forwarded messages</code>（转发的消息）、<code>Calls</code>（语音通话） 和 <code>Groups &amp; channels</code>（邀请权限） 分别改为 <code>My contacts</code>（仅联系人）</p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>更进一步，可将 <code>Phone number</code> 中的 <code>Who can find me by my number</code> 改为 <code>My contacts</code>，这将使只有双向联系人（即双方手机都有对方的电话号码）才可以通过电话号码添加您为好友。这可以在一定程度增加安全性。</p></div></li></ul></li></ol><blockquote><h4 id="💕-相关链接-archlinux-telegram-相关群组" tabindex="-1">💕 相关链接：archlinux Telegram 相关群组 <a class="header-anchor" href="#💕-相关链接-archlinux-telegram-相关群组" aria-hidden="true">#</a></h4><ul><li><a href="https://t.me/archlinuxcn_group" target="_blank" rel="noreferrer">#archlinux-cn</a></li><li><a href="https://t.me/archlinuxcn_offtopic" target="_blank" rel="noreferrer">#archlinux-cn-offtopic</a></li><li><a href="https://t.me/kdwu1fan" target="_blank" rel="noreferrer">篝ノ雾枝的咕咕小屋 | ArchLinux Studio</a></li></ul></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>目前官方中文语言包还不完整，可以通过点击第三方语言包链接设置 Telegram 为中文：</p><ul><li>简体： <ul><li><a href="https://t.me/setlanguage/zhcncc" target="_blank" rel="noreferrer">聪聪</a></li><li><a href="https://t.me/setlanguage/jianghu" target="_blank" rel="noreferrer">江湖</a></li><li><a href="https://t.me/setlanguage/zhlangcn" target="_blank" rel="noreferrer">langCN</a></li><li><a href="https://t.me/setlanguage/zh-hans-beta" target="_blank" rel="noreferrer">zh-hans</a></li><li><a href="https://t.me/setlanguage/moecn" target="_blank" rel="noreferrer">Moecn</a></li></ul></li><li>繁体： <ul><li><a href="https://t.me/setlanguage/hongkong" target="_blank" rel="noreferrer">繁體一</a></li><li><a href="https://t.me/setlanguage/zhhant-hk" target="_blank" rel="noreferrer">繁體二</a></li></ul></li></ul></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>虽然 Telegram 很“自由”，但也带来了很多问题：</p><ul><li>牵涉恐怖活动 —— 2015 年 11 月，由于伊斯兰国（ISIS）相关组织使用频繁，Telegram 移除了近 250 个所使用广播频道，并屏蔽其所属账号并且持续每天移除近百频道</li><li>非法出售个人信息 —— 2020 年 3 月中旬，中华人民共和国江苏园区公安分局网安大队在“净网 2020”专项行动的网络巡查中获取了一条网民通过 Telegram 出售公民个人信息的线索，并于 4 月 22 日在广东东莞和湖南衡阳逮捕 6 名嫌疑犯，查获过百万条公民个人信息</li><li>传播钓鱼木马 —— 2020 年 12 月 26 日，金山毒霸安全团队通过“捕风”威胁感知系统捕获一类新的钓鱼木马，该类木马在 Telegram 群组中传播，通过命名成各种时政热点消息的标题或者更改图标伪装成正规软件，诱使用户点击</li><li>传播色情、侵犯著作权的内容 —— 2018 年下半年至 2020 年 3 月间，韩国有人通过 Telegram 组建多个聊天室并收取费用，进行了有组织的、大规模的性虐待事件，即震惊韩国社会的 N 号房事件</li><li>颠覆国家政权 —— 2019 年 6 月，“反修例运动”期间，香港很多“抗议者”使用 Telegram 来逃避电子监视</li></ul><p>使用 Telegram 时注意安全，保护好个人隐私；同时也要注意谨言慎行。</p></div><blockquote><h4 id="🍧-碎碎念" tabindex="-1">🍧 碎碎念 <a class="header-anchor" href="#🍧-碎碎念" aria-hidden="true">#</a></h4><p>道也者，不可须臾离也；可离，非道也。是故君子戒慎乎其所不睹，恐惧乎其所不闻。莫见乎隐，莫显乎微，故君子慎其独也。</p></blockquote><h3 id="qq" tabindex="-1">QQ <a class="header-anchor" href="#qq" aria-hidden="true">#</a></h3><p>推荐安装官方最新的<a href="https://aur.archlinux.org/packages/linuxqq" target="_blank" rel="noreferrer"><code>linuxqq</code></a><sup>EULA / aur</sup>（基于 Electron 框架）</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">linuxqq</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>wrap版本<a href="https://aur.archlinux.org/packages/linuxqq-nt-bwrap" target="_blank" rel="noreferrer"><code>linuxqq-nt-bwrap</code></a><sup>EULA / aur</sup>，该版本限制了qq的目录访问</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">linuxqq-nt-bwrap</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+r+`" alt="qq-3"></p><h4 id="其它版本" tabindex="-1">其它版本 <a class="header-anchor" href="#其它版本" aria-hidden="true">#</a></h4><p>基于 <a href="https://aur.archlinux.org/packages/deepin-wine5" target="_blank" rel="noreferrer"><code>deepin-wine5</code></a><sup>EULA / community / cn / aur</sup> 的 QQ。</p><ol><li><p>安装 <a href="https://aur.archlinux.org/packages/deepin-wine-qq/" target="_blank" rel="noreferrer"><code>deepin-wine-qq</code></a><sup>aur</sup>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deepin-wine-qq</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+p+'" alt="qq-1"></p></li><li><p>参考 <a href="./../advanced/debug.html#deepin-wine5-相关">deepin-wine5 相关</a> 完成配置：</p><p><img src="'+i+`" alt="qq-2"></p></li></ol><h4 id="第三方" tabindex="-1">第三方 <a class="header-anchor" href="#第三方" aria-hidden="true">#</a></h4><p>以下为第三方版本 QQ</p><ul><li>Icalingua <a href="https://aur.archlinux.org/packages/icalingua/" target="_blank" rel="noreferrer"><code>Icalingua</code></a><sup>aur</sup> - electron 开发的第三方<s>QQ</s> (<a href="https://github.com/Icalingua/Icalingua" target="_blank" rel="noreferrer"><s>github</s></a>)(作者已删库)<div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">icalingua</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>Icalingua++ <a href="https://aur.archlinux.org/packages/icalingua++/" target="_blank" rel="noreferrer"><code>Icalingua++</code></a><sup>aur</sup> - electron 开发的第三方 QQ (<a href="https://github.com/Icalingua/Icalingua++" target="_blank" rel="noreferrer">github</a>)(为 icalingua 升级版)<div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">icalingua++</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><h3 id="微信" tabindex="-1">微信 <a class="header-anchor" href="#微信" aria-hidden="true">#</a></h3><p>推荐使用基于 <code>deepin-wine5</code> 的微信。</p><ol><li><p>安装 <a href="https://aur.archlinux.org/packages/com.qq.weixin.deepin/" target="_blank" rel="noreferrer"><code>com.qq.weixin.deepin</code></a><sup>EULA / aur</sup>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">com.qq.weixin.deepin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+t+'" alt="wechat-1"></p></li><li><p>参考 <a href="./../advanced/debug.html#deepin-wine5-相关">deepin-wine5 相关</a> 完成配置：</p><p><img src="'+o+`" alt="wechat-2"></p></li></ol><h4 id="其它版本-1" tabindex="-1">其它版本 <a class="header-anchor" href="#其它版本-1" aria-hidden="true">#</a></h4><p>以下为其它的微信版本，但体验一般：</p><ul><li><p><a href="https://aur.archlinux.org/packages/wechat-uos/" target="_blank" rel="noreferrer"><code>wechat-uos</code></a><sup>aur</sup> —— UOS 版本原生微信的移植版本</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wechat-uos</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><h3 id="skype" tabindex="-1">Skype <a class="header-anchor" href="#skype" aria-hidden="true">#</a></h3><p>Skype 是一款通信应用软件，可通过互联网为电脑、平板电脑和移动设备提供与其它联网设备或传统电话 / 智能手机间进行视频通话和语音通话的服务。用户也可通过 Skype 收发即时通讯信息、传输文件、收发多媒体信息、进行视频会议。</p><p>目前 Skype 归微软所有。</p><p>安装 <a href="https://www.skype.com/zh-Hans/" target="_blank" rel="noreferrer">Skype</a><sup>EULA / cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-YW72k" id="tab-0dbfeMo" checked="checked"><label for="tab-0dbfeMo">sh</label><input type="radio" name="group-YW72k" id="tab-E-qfAav"><label for="tab-E-qfAav">sh</label><input type="radio" name="group-YW72k" id="tab-GDUXEKw"><label for="tab-GDUXEKw">sh</label><input type="radio" name="group-YW72k" id="tab-eGqBLvc"><label for="tab-eGqBLvc">sh</label></div><div class="blocks"><p>::: code-group-item cn</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">skypeforlinux-stable-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/skypeforlinux-stable-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item cn（preview）</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">skypeforlinux-preview-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur（preview）</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/skypeforlinux-preview-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+c+`" alt="skype"></p><h3 id="discord" tabindex="-1">Discord <a class="header-anchor" href="#discord" aria-hidden="true">#</a></h3><p><a href="https://discord.com/" target="_blank" rel="noreferrer">Discord</a> 是一款专为社区设计的免费网络实时通话软件与数字发行平台，主要针对游戏玩家、教育人士及商业人士，用户之间可以在其中的聊天频道通过信息、图片、视频和音频进行互动。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/discord/" target="_blank" rel="noreferrer">Discord</a>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">discord</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+d+`" alt="discord"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>类似 Telegram，Discord 同样存在诸多不正当内容（包括但不限于种族歧视、色情内容等）。</p><p>请注意安全、保护好隐私、文明上网。</p></div><h3 id="teamspeak-3" tabindex="-1">TeamSpeak 3 <a class="header-anchor" href="#teamspeak-3" aria-hidden="true">#</a></h3><p>一款代替 <code>YY语音</code> <code>Discord</code> 等游戏语音聊天软件，有占用资源低、连接快捷、自带 Opus 音频解码器、无广告、全平台、语音加密传输、可自建服务器、可随意调节的“语音感应激活”功能告别通讯底噪和键盘噪音。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">teamspeak3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+h+`" alt="teamspeak3"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><ol><li><p><a href="https://www.wevg.org/archives/fix-ts3-linux-plugin/" target="_blank" rel="noreferrer">中文汉化</a> 没有目录就创建目录，脚本需要给执行权限</p></li><li><p>直接 <code>/opt/teamspeak3/package_inst Chinese_Translation_zh-CN.ts3_translation</code></p></li><li><p>以上汉化 二选一</p></li><li><p><a href="https://www.wevg.org/archives/how-to-use-teamspeak3/" target="_blank" rel="noreferrer">新手指南</a></p></li></ol></div><h2 id="🤝🏻-团队合作" tabindex="-1">🤝🏻 团队合作 <a class="header-anchor" href="#🤝🏻-团队合作" aria-hidden="true">#</a></h2><h3 id="slack" tabindex="-1">Slack <a class="header-anchor" href="#slack" aria-hidden="true">#</a></h3><p><a href="https://slack.com/intl/zh-cn/features" target="_blank" rel="noreferrer">Slack</a> 是一款基于云端运算的即时通讯软件。为团队和工作提供一个单一的平台。类似 Discord，也分有许多频道，通过频道组织工作。</p><p>安装 <a href="https://aur.archlinux.org/packages/slack-desktop/" target="_blank" rel="noreferrer">Slack</a><sup>EULA / cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-5lUjw" id="tab-lZjTkTH" checked="checked"><label for="tab-lZjTkTH">sh</label><input type="radio" name="group-5lUjw" id="tab-WETVj-i"><label for="tab-WETVj-i">sh</label></div><div class="blocks"><p>::: code-group-item cn</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">slack-desktop</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/slack-desktop</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+u+`" alt="slack"></p><h2 id="📹-网络会议" tabindex="-1">📹 网络会议 <a class="header-anchor" href="#📹-网络会议" aria-hidden="true">#</a></h2><h3 id="zoom" tabindex="-1">Zoom <a class="header-anchor" href="#zoom" aria-hidden="true">#</a></h3><p>安装 <a href="https://aur.archlinux.org/packages/zoom/" target="_blank" rel="noreferrer">Zoom</a>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zoom</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+m+`" alt="zoom"></p><h3 id="腾讯会议" tabindex="-1">腾讯会议 <a class="header-anchor" href="#腾讯会议" aria-hidden="true">#</a></h3><p>安装 <a href="https://aur.archlinux.org/packages/wemeet-bin" target="_blank" rel="noreferrer"><code>wemeet-bin</code></a><sup>EULA / aur</sup>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wemeet-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+b+`" alt="meeting-2"></p><h2 id="✉️-电子邮件" tabindex="-1">✉️ 电子邮件 <a class="header-anchor" href="#✉️-电子邮件" aria-hidden="true">#</a></h2><h3 id="thunderbird" tabindex="-1">Thunderbird <a class="header-anchor" href="#thunderbird" aria-hidden="true">#</a></h3><p>Mozilla Thunderbird（雷鸟）是由 Mozilla 基金会研发的一款自由开源的跨平台电子邮件客户端、新闻阅读器、聚合器以及即时通信软件。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/thunderbird/" target="_blank" rel="noreferrer">Thunderbird</a>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">thunderbird</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+g+`" alt="thunderbird"></p><h3 id="kmail" tabindex="-1">KMail <a class="header-anchor" href="#kmail" aria-hidden="true">#</a></h3><p>KMail 是一款功能先进的电子邮件客户端，能与 GMail 等常用电子邮件服务提供商进行整合。KMail 支持各种电子邮件协议，包括 POP3、IMAP、Microsoft Exchange（EWS）等。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/kmail/" target="_blank" rel="noreferrer">KMail</a>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kmail</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+y+`" alt="kmail"></p><h3 id="mailspring" tabindex="-1">Mailspring <a class="header-anchor" href="#mailspring" aria-hidden="true">#</a></h3><p>MailSpring 是一款界面简约、操作便捷、功能出众的邮件管理工具。MailSpring 官方版可以帮助用户管理多个邮箱，提高工作效率，同时还能够对重要事项进行提醒，并可以编辑自己的签名，给大家带来了不一样的感受和体验。其客户端在 github 上开源，但使用时需要注册 mailspring 账户。</p><p>KDE 用户使用 mailspring 前需要安装<code>gnome-keyring</code></p><p>安装 <a href="https://github.com/Foundry376/Mailspring" target="_blank" rel="noreferrer">mailspring</a><sup>EULA / cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-JpTOr" id="tab-tY_S9Rt" checked="checked"><label for="tab-tY_S9Rt">sh</label><input type="radio" name="group-JpTOr" id="tab-vxI051q"><label for="tab-vxI051q">sh</label></div><div class="blocks"><p>::: code-group-item cn</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mailspring</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/mailspring</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="https://raw.githubusercontent.com/Foundry376/Mailspring/master/screenshots/hero_graphic_mac%402x.png" alt="mailspring"></p>`,82),v=[k];function f(A,D,_,x,E,w){return s(),e("div",null,v)}const B=a(C,[["render",f]]);export{S as __pageData,B as default};
