window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12870","name":"v_ecnprouting_detail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_ecnprouting_detail --opdesc,DPartAttr,DQty,DAuxQty最后处理\r\nAs\r\nselect top 99 PERCENT \r\nc.OpSeq as DOpSeq,\r\no.OpCode as DOpCode,\r\nc.Description as DDescription,\r\nc.reportflag as DIsReport,\r\nc.BFFlag as DIsBF,\r\nwc.wccode as DWcCode,\r\nwc.Description as DWcDescription,\r\nc.SubFlag as DSubFlag,\r\nc.SVendorCode as DSVendorCode,\r\nv.cvenname as DVenName,\r\nc.RltOptionFlag as DRltOptionFlag,\r\nc.SplitFlag as DSplitFlag,\r\nc.FeeFlag as DIsFee,\r\nc.PlanSubFlag as DIsPlanSub,\r\nc.DeliveryDays as DDeliverDays,\r\nc.LtPercent as DLtPercent,\r\nc.AuxUnitCode as DOpUnitCode,\r\naux.ccomunitname as DOpUnitName,\r\nc.ChangeRate as DChangeRate,\r\nc.EffBegDate as DEffBegDate,\r\nc.EffEndDate as DEffEndDate,\r\nc.Remark as DRemark,\r\nc.define22 as DDefine_22,\r\nc.define23 as DDefine_23,\r\nc.define24 as DDefine_24,\r\nc.define25 as DDefine_25,\r\nc.define26 as DDefine_26,\r\nc.define27 as DDefine_27,\r\nc.define28 as DDefine_28,\r\nc.define29 as DDefine_29,\r\nc.define30 as DDefine_30,\r\nc.define31 as DDefine_31,\r\nc.define32 as DDefine_32,\r\nc.define33 as DDefine_33,\r\nc.define34 as DDefine_34,\r\nc.define35 as DDefine_35,\r\nc.define36 as DDefine_36,\r\nc.define37 as DDefine_37,\r\nc.ecnroutingid as PRoutingId \r\nfrom ecn_proutingdetail c\r\ninner join sfc_operation o on o.operationid = c.operationid\r\nleft outer join ComputationUnit aux on aux.cComunitCode = c.auxunitcode\r\nleft outer join sfc_workcenter wc on wc.wcid = c.wcid\r\nleft outer join vendor v on v.cvencode = c.SVendorCode\r\norder by DOpSeq","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ecnprouting_detail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-324048","object_id":"column-324048","name":"DOpSeq","name_without_path":"DOpSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324049","object_id":"column-324049","name":"DOpCode","name_without_path":"DOpCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324050","object_id":"column-324050","name":"DDescription","name_without_path":"DDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324051","object_id":"column-324051","name":"DIsReport","name_without_path":"DIsReport","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324052","object_id":"column-324052","name":"DIsBF","name_without_path":"DIsBF","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324053","object_id":"column-324053","name":"DWcCode","name_without_path":"DWcCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324054","object_id":"column-324054","name":"DWcDescription","name_without_path":"DWcDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324055","object_id":"column-324055","name":"DSubFlag","name_without_path":"DSubFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324056","object_id":"column-324056","name":"DSVendorCode","name_without_path":"DSVendorCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324057","object_id":"column-324057","name":"DVenName","name_without_path":"DVenName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324058","object_id":"column-324058","name":"DRltOptionFlag","name_without_path":"DRltOptionFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324059","object_id":"column-324059","name":"DSplitFlag","name_without_path":"DSplitFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324060","object_id":"column-324060","name":"DIsFee","name_without_path":"DIsFee","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324061","object_id":"column-324061","name":"DIsPlanSub","name_without_path":"DIsPlanSub","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324062","object_id":"column-324062","name":"DDeliverDays","name_without_path":"DDeliverDays","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324063","object_id":"column-324063","name":"DLtPercent","name_without_path":"DLtPercent","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324064","object_id":"column-324064","name":"DOpUnitCode","name_without_path":"DOpUnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324065","object_id":"column-324065","name":"DOpUnitName","name_without_path":"DOpUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324066","object_id":"column-324066","name":"DChangeRate","name_without_path":"DChangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_ChangeRate: decimal","data_length":"22, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324067","object_id":"column-324067","name":"DEffBegDate","name_without_path":"DEffBegDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324068","object_id":"column-324068","name":"DEffEndDate","name_without_path":"DEffEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324069","object_id":"column-324069","name":"DRemark","name_without_path":"DRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324070","object_id":"column-324070","name":"DDefine_22","name_without_path":"DDefine_22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324071","object_id":"column-324071","name":"DDefine_23","name_without_path":"DDefine_23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324072","object_id":"column-324072","name":"DDefine_24","name_without_path":"DDefine_24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324073","object_id":"column-324073","name":"DDefine_25","name_without_path":"DDefine_25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324074","object_id":"column-324074","name":"DDefine_26","name_without_path":"DDefine_26","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324075","object_id":"column-324075","name":"DDefine_27","name_without_path":"DDefine_27","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324076","object_id":"column-324076","name":"DDefine_28","name_without_path":"DDefine_28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324077","object_id":"column-324077","name":"DDefine_29","name_without_path":"DDefine_29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324078","object_id":"column-324078","name":"DDefine_30","name_without_path":"DDefine_30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324079","object_id":"column-324079","name":"DDefine_31","name_without_path":"DDefine_31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324080","object_id":"column-324080","name":"DDefine_32","name_without_path":"DDefine_32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324081","object_id":"column-324081","name":"DDefine_33","name_without_path":"DDefine_33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324082","object_id":"column-324082","name":"DDefine_34","name_without_path":"DDefine_34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324083","object_id":"column-324083","name":"DDefine_35","name_without_path":"DDefine_35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324084","object_id":"column-324084","name":"DDefine_36","name_without_path":"DDefine_36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324085","object_id":"column-324085","name":"DDefine_37","name_without_path":"DDefine_37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-324086","object_id":"column-324086","name":"PRoutingId","name_without_path":"PRoutingId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};