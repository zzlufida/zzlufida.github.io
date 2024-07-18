window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13676","name":"v_mom_replenishapply_wf","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_mom_replenishapply_wf  \r\nAS   \r\nSELECT mom_replenishapply.ApplyId,\r\n       mom_replenishapply.DocCode, --补料申请单号  \r\n       mom_replenishapply.DocDate, --单据日期  \r\n       mom_replenishapply.MDeptCode,--部门编码  \r\n       Department.cDepName AS DeptName,--部门名称  \t \r\n       mom_replenishapply.Status,\r\n       mom_replenishapply.Define1 as Define_1,\r\n       mom_replenishapply.Define2 as Define_2,\r\n       mom_replenishapply.Define3 as Define_3,\r\n       mom_replenishapply.Define4 as Define_4,\r\n       mom_replenishapply.Define5 as Define_5,  \r\n       mom_replenishapply.Define6 as Define_6,\r\n       mom_replenishapply.Define7 as Define_7,\r\n       mom_replenishapply.Define8 as Define_8,\r\n       mom_replenishapply.Define9 as Define_9,\r\n       mom_replenishapply.Define10 as Define_10,  \r\n       mom_replenishapply.Define11 as Define_11,\r\n       mom_replenishapply.Define12 as Define_12,\r\n       mom_replenishapply.Define13 as Define_13,\r\n       mom_replenishapply.Define14 as Define_14,\r\n       mom_replenishapply.Define15 as Define_15,\r\n       mom_replenishapply.Define16 as Define_16,--表头自定义项1－16  \r\n       mom_replenishapply.CreateDate,CreateUser = uc.cUser_Name,mom_replenishapply.CreateTime,--制单信息  \r\n       mom_replenishapply.RelsDate,RelsUser = ur.cUser_Name,mom_replenishapply.RelsTime,--审核信息  \r\n       mom_replenishapply.CloseDate,CloseUser = ul.cUser_Name,mom_replenishapply.CloseTime,--关闭信息   \r\n       mom_replenishapply.ModifyDate,ModifyUser = um.cUser_Name,mom_replenishapply.ModifyTime,--修改信息\r\n       mom_replenishapply.vtid as vtid,mom_replenishapply.cSysBarCode AS BarCode,\r\n       mom_replenishapply.AuditStatus AS AuditStatus --审批状态\r\n FROM mom_replenishapply   \r\n LEFT OUTER JOIN Department on Department.cDepCode = mom_replenishapply.MDeptCode    \r\n left outer join ufsystem..ua_user as uc with (nolock) on uc.cUser_Id = mom_replenishapply.CreateUser\r\n left outer join ufsystem..ua_user as um with (nolock) on um.cUser_Id = mom_replenishapply.ModifyUser\r\n left outer join ufsystem..ua_user as ur with (nolock) on ur.cUser_Id = mom_replenishapply.RelsUser\r\n left outer join ufsystem..ua_user as ul with (nolock) on ul.cUser_Id = mom_replenishapply.CloseUser","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_mom_replenishapply_wf"},{"field":"Type","value":"View"}],"columns":[{"id":"column-394977","object_id":"column-394977","name":"ApplyId","name_without_path":"ApplyId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394978","object_id":"column-394978","name":"DocCode","name_without_path":"DocCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394979","object_id":"column-394979","name":"DocDate","name_without_path":"DocDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394980","object_id":"column-394980","name":"MDeptCode","name_without_path":"MDeptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394981","object_id":"column-394981","name":"DeptName","name_without_path":"DeptName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394982","object_id":"column-394982","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394983","object_id":"column-394983","name":"Define_1","name_without_path":"Define_1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394984","object_id":"column-394984","name":"Define_2","name_without_path":"Define_2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394985","object_id":"column-394985","name":"Define_3","name_without_path":"Define_3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394986","object_id":"column-394986","name":"Define_4","name_without_path":"Define_4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394987","object_id":"column-394987","name":"Define_5","name_without_path":"Define_5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394988","object_id":"column-394988","name":"Define_6","name_without_path":"Define_6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394989","object_id":"column-394989","name":"Define_7","name_without_path":"Define_7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394990","object_id":"column-394990","name":"Define_8","name_without_path":"Define_8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394991","object_id":"column-394991","name":"Define_9","name_without_path":"Define_9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394992","object_id":"column-394992","name":"Define_10","name_without_path":"Define_10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394993","object_id":"column-394993","name":"Define_11","name_without_path":"Define_11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394994","object_id":"column-394994","name":"Define_12","name_without_path":"Define_12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394995","object_id":"column-394995","name":"Define_13","name_without_path":"Define_13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394996","object_id":"column-394996","name":"Define_14","name_without_path":"Define_14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394997","object_id":"column-394997","name":"Define_15","name_without_path":"Define_15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394998","object_id":"column-394998","name":"Define_16","name_without_path":"Define_16","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-394999","object_id":"column-394999","name":"CreateDate","name_without_path":"CreateDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395000","object_id":"column-395000","name":"CreateUser","name_without_path":"CreateUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395001","object_id":"column-395001","name":"CreateTime","name_without_path":"CreateTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395002","object_id":"column-395002","name":"RelsDate","name_without_path":"RelsDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395003","object_id":"column-395003","name":"RelsUser","name_without_path":"RelsUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395004","object_id":"column-395004","name":"RelsTime","name_without_path":"RelsTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395005","object_id":"column-395005","name":"CloseDate","name_without_path":"CloseDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395006","object_id":"column-395006","name":"CloseUser","name_without_path":"CloseUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395007","object_id":"column-395007","name":"CloseTime","name_without_path":"CloseTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395008","object_id":"column-395008","name":"ModifyDate","name_without_path":"ModifyDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395009","object_id":"column-395009","name":"ModifyUser","name_without_path":"ModifyUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395010","object_id":"column-395010","name":"ModifyTime","name_without_path":"ModifyTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395011","object_id":"column-395011","name":"vtid","name_without_path":"vtid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395012","object_id":"column-395012","name":"BarCode","name_without_path":"BarCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395013","object_id":"column-395013","name":"AuditStatus","name_without_path":"AuditStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};