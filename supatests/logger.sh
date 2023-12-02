#!/bin/bash

date >> data_out.log

node index.js >> data_out.log 2>> errors.log

node ineq_and.js >> data_out.log 2>> errors.log

node ineq_or.js >> data_out.log 2>> errors.log

node ineq.js >> data_out.log 2>> errors.log

node equal.js >> data_out.log 2>> errors.log