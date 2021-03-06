import doczPluginNetlify from "docz-plugin-netlify";

export default {
    title: 'kintone UI Component',
    description: 'An UI design language and React-based implementation',
    //dest: 'docs',
    plugins: [doczPluginNetlify()],
    //base: process.env.NODE_ENV === 'production' ? '/' : '/',
    hashRouter: true,
    modifyBundlerConfig: bundlerConfig => {
        const rules = [
          {
            test: /\.css$/,
            loader: "style-loader!css-loader"
          }
        ];
        bundlerConfig.module.rules.push(...rules);
        return bundlerConfig;
      }
    
  }