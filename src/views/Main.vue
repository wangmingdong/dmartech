<template>
  <div class="main">
    <el-button type="text" @click="dialogVisible = true">Send Email</el-button>
    <el-button type="text" @click="layout">exit</el-button>


    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-row>
        <el-col :span="24">
          <el-form ref="form" :model="form">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
    export default {
        name: 'Main',
        computed: {

        },
        data() {
            return {
                dialogVisible: false,
                loginInfo: {
                    username: '',
                    password: ''
                },
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            };
        },
        created() {
            this.loginInfo.username = sessionStorage.getItem('username')
            this.loginInfo.password = sessionStorage.getItem('password')
            console.log(this.loginInfo)
        },
        mounted() {

        },
        methods: {
            onSubmit() {
                this.$http({
                    url: '/webservice/getCampaigns', //请求的后台接口
                    method: 'get', //get请求方式
                    params: this.loginInfo //传给后台的参数
                }).then(res => {
                    //请求成功
                    console.log(res)
                }).catch(error => {
                    //请求失败
                    console.log(error)
                })
                this.dialogVisible = false
            },
            // 退出登录
            layout() {
                sessionStorage.removeItem('token');
                this.$router.push({
                    path: '/login',
                });
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    </style lang="sass">