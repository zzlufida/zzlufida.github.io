window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14056","name":"V_VM_Dev_Member","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view V_VM_Dev_Member\r\nAS\r\n\r\n\r\nselect   \r\nvm_member.oid,  \r\nvm_member.ccode,  \r\nvm_member.cname,  \r\nvm_member4.oid AS 推荐人ID,\r\nvm_member4.ccode  AS 推荐人Code,\r\nvm_member4.cname   AS 推荐人Name,\r\nvm_member.wechatrecommendmemberid AS 易联推荐人ID,\r\nvm_member2.ccode  AS 易联推荐人Code,\r\nvm_member2.cname   AS 易联推荐人Name,\r\nvm_member.retailrecommendguid AS 零售推荐人ID,\r\nvm_member3.ccode  AS 零售推荐人Code,\r\nvm_member3.cname   AS 零售推荐人Name,\r\nvm_member.cnickname,  \r\n(SELECT SUM(ISNULL(fmemberfeeremain ,0)) \r\nFROM vm_feeeffectiveperiod  \r\nwhere vm_feeeffectiveperiod.omemberid=vm_member.oid AND vm_feeeffectiveperiod.dfeeeffectiveperiodto >=\r\nCAST(CONVERT(varchar(10),GETDATE(),121) AS DATETIME )\r\n ) AS fmemberfee,\r\nvm_member.cmobilephone,\r\nvm_member.ogradeid,  \r\n vm_membergrade.ccode as cgradecode,  \r\nvm_membergrade.cgrade as cgradename,  \r\nISNULL(vm_member.imembersource,1) AS imembersource,  \r\nsource.EnumName AS imembersourcename,\r\nvm_member.retailguid,vm_member.retailufts ,\r\nvm_member.wechatmemberid,\r\nvm_member.cwechat,\r\nvm_member.cmicromessage,  \r\nvm_member.wechatrecommendmemberid ,\r\nvm_member.wechatrecommendtime,\r\nvm_member.wechatufts ,\r\n\r\n'-----------' AS XXXXXXXX,\r\nvm_member.cmaker,\r\nvm_member.cbrandcode,  \r\nvm_member.cbrandname,\r\nvm_member.fsumbuymoney,  \r\nvm_member.isumbuycount,  vm_member.dcreatesystime,  \r\nconvert(nchar, convert(money,vm_member.ufts), 2) as ufts  , \r\nvm_member.dbirthdate,   \r\nvm_member.cprovinceid,  \r\nvm_member.ccityid,  \r\nvm_member.careaid,  \r\nvm_member.cprovince,  \r\nvm_member.ccity,  \r\nvm_member.carea,  \r\nvm_member.ddate,  \r\n\r\nvm_member.csex,   \r\nvm_member.cphone,  \r\nvm_member.cqqcode,  \r\nvm_member.cemail,  \r\n  \r\nvm_member.bstop,  \r\nvm_member.dstopdate ,\r\nvm_member.cretailareacode,  \r\nvm_member.cretailareaname,  \r\nvm_member.dwechatdate   ,\r\n\r\nvm_member.cretailstorecode,\r\nvm_member.cretailstorename,\r\nvm_member.dlastbuydate\r\nfrom   \r\nvm_member  \r\nleft join  person on vm_member.cpersoncode=person.cpersoncode       \r\nleft join dbo.vm_membergrade on vm_member.ogradeid  =vm_membergrade.oid   \r\nLEFT JOIN v_aa_enum source ON ISNULL(vm_member.imembersource,1)   =source.EnumCode  AND source.EnumType ='vm.imembersource'\r\nLEFT JOIN vm_member vm_member2 ON vm_member.wechatrecommendmemberid=vm_member2.wechatmemberid  \r\nLEFT JOIN vm_member vm_member3 ON vm_member.retailrecommendguid=vm_member3.retailguid \r\n LEFT JOIN vm_member vm_member4 ON vm_member.orecommendid=vm_member4.oid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_VM_Dev_Member"},{"field":"Type","value":"View"}],"columns":[{"id":"column-413364","object_id":"column-413364","name":"oid","name_without_path":"oid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413365","object_id":"column-413365","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413366","object_id":"column-413366","name":"cname","name_without_path":"cname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413367","object_id":"column-413367","name":"推荐人ID","name_without_path":"推荐人ID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413368","object_id":"column-413368","name":"推荐人Code","name_without_path":"推荐人Code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413369","object_id":"column-413369","name":"推荐人Name","name_without_path":"推荐人Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413370","object_id":"column-413370","name":"易联推荐人ID","name_without_path":"易联推荐人ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413371","object_id":"column-413371","name":"易联推荐人Code","name_without_path":"易联推荐人Code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413372","object_id":"column-413372","name":"易联推荐人Name","name_without_path":"易联推荐人Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413373","object_id":"column-413373","name":"零售推荐人ID","name_without_path":"零售推荐人ID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413374","object_id":"column-413374","name":"零售推荐人Code","name_without_path":"零售推荐人Code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413375","object_id":"column-413375","name":"零售推荐人Name","name_without_path":"零售推荐人Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413376","object_id":"column-413376","name":"cnickname","name_without_path":"cnickname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413377","object_id":"column-413377","name":"fmemberfee","name_without_path":"fmemberfee","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413378","object_id":"column-413378","name":"cmobilephone","name_without_path":"cmobilephone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413379","object_id":"column-413379","name":"ogradeid","name_without_path":"ogradeid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413380","object_id":"column-413380","name":"cgradecode","name_without_path":"cgradecode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413381","object_id":"column-413381","name":"cgradename","name_without_path":"cgradename","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413382","object_id":"column-413382","name":"imembersource","name_without_path":"imembersource","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413383","object_id":"column-413383","name":"imembersourcename","name_without_path":"imembersourcename","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413384","object_id":"column-413384","name":"retailguid","name_without_path":"retailguid","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413385","object_id":"column-413385","name":"retailufts","name_without_path":"retailufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413386","object_id":"column-413386","name":"wechatmemberid","name_without_path":"wechatmemberid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413387","object_id":"column-413387","name":"cwechat","name_without_path":"cwechat","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413388","object_id":"column-413388","name":"cmicromessage","name_without_path":"cmicromessage","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413389","object_id":"column-413389","name":"wechatrecommendmemberid","name_without_path":"wechatrecommendmemberid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413390","object_id":"column-413390","name":"wechatrecommendtime","name_without_path":"wechatrecommendtime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413391","object_id":"column-413391","name":"wechatufts","name_without_path":"wechatufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413392","object_id":"column-413392","name":"XXXXXXXX","name_without_path":"XXXXXXXX","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413393","object_id":"column-413393","name":"cmaker","name_without_path":"cmaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413394","object_id":"column-413394","name":"cbrandcode","name_without_path":"cbrandcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413395","object_id":"column-413395","name":"cbrandname","name_without_path":"cbrandname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413396","object_id":"column-413396","name":"fsumbuymoney","name_without_path":"fsumbuymoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413397","object_id":"column-413397","name":"isumbuycount","name_without_path":"isumbuycount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413398","object_id":"column-413398","name":"dcreatesystime","name_without_path":"dcreatesystime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413399","object_id":"column-413399","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413400","object_id":"column-413400","name":"dbirthdate","name_without_path":"dbirthdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413401","object_id":"column-413401","name":"cprovinceid","name_without_path":"cprovinceid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413402","object_id":"column-413402","name":"ccityid","name_without_path":"ccityid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413403","object_id":"column-413403","name":"careaid","name_without_path":"careaid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413404","object_id":"column-413404","name":"cprovince","name_without_path":"cprovince","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413405","object_id":"column-413405","name":"ccity","name_without_path":"ccity","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413406","object_id":"column-413406","name":"carea","name_without_path":"carea","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413407","object_id":"column-413407","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413408","object_id":"column-413408","name":"csex","name_without_path":"csex","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413409","object_id":"column-413409","name":"cphone","name_without_path":"cphone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413410","object_id":"column-413410","name":"cqqcode","name_without_path":"cqqcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413411","object_id":"column-413411","name":"cemail","name_without_path":"cemail","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413412","object_id":"column-413412","name":"bstop","name_without_path":"bstop","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413413","object_id":"column-413413","name":"dstopdate","name_without_path":"dstopdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413414","object_id":"column-413414","name":"cretailareacode","name_without_path":"cretailareacode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413415","object_id":"column-413415","name":"cretailareaname","name_without_path":"cretailareaname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413416","object_id":"column-413416","name":"dwechatdate","name_without_path":"dwechatdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413417","object_id":"column-413417","name":"cretailstorecode","name_without_path":"cretailstorecode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413418","object_id":"column-413418","name":"cretailstorename","name_without_path":"cretailstorename","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-413419","object_id":"column-413419","name":"dlastbuydate","name_without_path":"dlastbuydate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};