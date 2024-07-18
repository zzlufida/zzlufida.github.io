window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11392","name":"hr_v_tr_deptact","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/*==============================================================*/\r\n/* View: hr_v_tr_deptact                                         */\r\n/*==============================================================*/\r\n--创建培训活动视图(注册时注册为部门子集)，用于统计分析\r\ncreate view hr_v_tr_deptact\r\nas\r\nselect PK_hr_tr_activity,iRecordID,blastflag,vstatus1,nstatus2,vtraincode,vtrainname,rtrainlevel, rtraindpt as 'cDepCode',itrainyear,itrainseason,\r\n\trtraintype,rtrainmode,vtrainaim,vtraincontent,vtrainsubject,rtrainitem,dtrainstart,dtrainend,ntrainperiod,itrainpsnnum,ntrainbudget,nactualcharge,\r\n\tvchargeUnit,rorgname,vtrainaddress,dsignupstart,dsignupend,rorganizer,dauthorize,benvelop,bsendMessage,hrts\r\nfrom hr_tr_activity","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_tr_deptact"},{"field":"Type","value":"View"}],"columns":[{"id":"column-228328","object_id":"column-228328","name":"PK_hr_tr_activity","name_without_path":"PK_hr_tr_activity","description":null,"is_pk":false,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228329","object_id":"column-228329","name":"iRecordID","name_without_path":"iRecordID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228330","object_id":"column-228330","name":"blastflag","name_without_path":"blastflag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228331","object_id":"column-228331","name":"vstatus1","name_without_path":"vstatus1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228332","object_id":"column-228332","name":"nstatus2","name_without_path":"nstatus2","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228333","object_id":"column-228333","name":"vtraincode","name_without_path":"vtraincode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228334","object_id":"column-228334","name":"vtrainname","name_without_path":"vtrainname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228335","object_id":"column-228335","name":"rtrainlevel","name_without_path":"rtrainlevel","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228336","object_id":"column-228336","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228337","object_id":"column-228337","name":"itrainyear","name_without_path":"itrainyear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228338","object_id":"column-228338","name":"itrainseason","name_without_path":"itrainseason","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228339","object_id":"column-228339","name":"rtraintype","name_without_path":"rtraintype","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228340","object_id":"column-228340","name":"rtrainmode","name_without_path":"rtrainmode","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228341","object_id":"column-228341","name":"vtrainaim","name_without_path":"vtrainaim","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228342","object_id":"column-228342","name":"vtraincontent","name_without_path":"vtraincontent","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"600","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228343","object_id":"column-228343","name":"vtrainsubject","name_without_path":"vtrainsubject","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228344","object_id":"column-228344","name":"rtrainitem","name_without_path":"rtrainitem","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228345","object_id":"column-228345","name":"dtrainstart","name_without_path":"dtrainstart","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228346","object_id":"column-228346","name":"dtrainend","name_without_path":"dtrainend","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228347","object_id":"column-228347","name":"ntrainperiod","name_without_path":"ntrainperiod","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228348","object_id":"column-228348","name":"itrainpsnnum","name_without_path":"itrainpsnnum","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228349","object_id":"column-228349","name":"ntrainbudget","name_without_path":"ntrainbudget","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228350","object_id":"column-228350","name":"nactualcharge","name_without_path":"nactualcharge","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228351","object_id":"column-228351","name":"vchargeUnit","name_without_path":"vchargeUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228352","object_id":"column-228352","name":"rorgname","name_without_path":"rorgname","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228353","object_id":"column-228353","name":"vtrainaddress","name_without_path":"vtrainaddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228354","object_id":"column-228354","name":"dsignupstart","name_without_path":"dsignupstart","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228355","object_id":"column-228355","name":"dsignupend","name_without_path":"dsignupend","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228356","object_id":"column-228356","name":"rorganizer","name_without_path":"rorganizer","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228357","object_id":"column-228357","name":"dauthorize","name_without_path":"dauthorize","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228358","object_id":"column-228358","name":"benvelop","name_without_path":"benvelop","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228359","object_id":"column-228359","name":"bsendMessage","name_without_path":"bsendMessage","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228360","object_id":"column-228360","name":"hrts","name_without_path":"hrts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};