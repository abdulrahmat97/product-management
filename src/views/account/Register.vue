<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Register</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-stepper v-model="e1">
                <v-stepper-header>
                  <v-stepper-step :complete="e1 > 1" step="1">Account</v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e1 > 2" step="2">Store</v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="3">Bank Account</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                  <v-stepper-content step="1">
                    <v-card class="mb-5" flat>
                      <v-card-text>
                        <v-text-field
                          outline
                          label="Name"
                          name="name"
                          :error-messages="errors.collect('name')"
                          v-validate="'required|alpha'"
                        />
                        <v-text-field
                          outline
                          label="Email"
                          name="email"
                          :error-messages="errors.collect('email')"
                          v-validate="'required|email'"
                        />
                        <v-text-field
                          outline
                          label="Phone Number"
                          v-validate="'required|numeric'"
                          name="phone"
                          :error-messages="errors.collect('phone')"
                        />
                        <v-text-field
                          outline
                          label="Password"
                          type="password"
                          name="password"
                          v-validate="'required'"
                          :error-messages="errors.collect('password')"
                        />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
                      </v-card-actions>
                    </v-card>
                    <!-- <v-btn flat>Cancel</v-btn> -->
                  </v-stepper-content>

                  <v-stepper-content step="2">
                    <v-card class="mb-5" flat>
                      <v-card-text>
                        <v-text-field
                          outline
                          label="Store Name"
                          name="storename"
                          v-validate="'required'"
                          :error-messages="errors.collect('storename')"
                        />
                        <v-textarea
                          outline
                          label="Address"
                          name="address"
                          v-validate="'required'"
                          :error-messages="errors.collect('address')"
                        ></v-textarea>
                        <v-text-field
                          outline
                          label="City"
                          name="city"
                          v-validate="'required'"
                          :error-messages="errors.collect('city')"
                        />
                        <v-text-field
                          outline
                          label="District"
                          name="district"
                          v-validate="'required'"
                          :error-messages="errors.collect('district')"
                        />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

                        <v-btn flat @click="e1 = 1">Back</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-stepper-content>

                  <v-stepper-content step="3">
                    <v-card class="mb-5" flat>
                      <v-card-text>
                        <v-text-field
                          outline
                          label="Bank Name"
                          name="bankname"
                          v-validate="'required'"
                          :error-messages="errors.collect('bankname')"
                        />
                        <v-text-field
                          outline
                          label="Account Name"
                          name="accname"
                          v-validate="'required'"
                          :error-messages="errors.collect('accname')"
                        />
                        <v-text-field
                          outline
                          label="Account Number"
                          type="number"
                          name="accnumber"
                          v-validate="'required|numeric'"
                          :error-messages="errors.collect('accnumber')"
                        />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" @click="register">Register</v-btn>
                        <v-btn flat @click="e1 =2">Back</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </v-card-text>
            <!-- <v-card-actions></v-card-actions> -->
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      e1: 0
    };
  },
  methods: {
    register() {
      this.$validator.validateAll();
    }
  }
};
</script>