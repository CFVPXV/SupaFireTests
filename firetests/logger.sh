#!/bin/bash

date >> test_log.log

node execute_all.js >> test_log.log 2>> test_error.log

node execute_eq.js >> test_log.log 2>> test_error.log

node execute_ineq.js >> test_log.log 2>> test_error.log

node execute_ineq_and.js >> test_log.log 2>> test_error.log

node execute_ineq_or.js >> test_log.log 2>> test_error.log