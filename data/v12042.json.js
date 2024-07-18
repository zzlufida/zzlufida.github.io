window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12042","name":"QM_Qrefpuordercode","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[QM_Qrefpuordercode]   \r\nAS  \r\n-- select PO_Pomain.cPOID,PO_Podetails.ID as iPOsID,rdrecord.cVenCode,rdrecords.AutoID,   \r\n-- rdrecords.cBatch,rdrecords.cFree1,rdrecords.cFree2,rdrecords.cFree3,rdrecords.cFree4,  \r\n-- rdrecords.cFree5,rdrecords.cFree6,rdrecords.cFree7,rdrecords.cFree8,rdrecords.cFree9,  \r\n-- rdrecords.cFree10,rdrecord.ddate,rdrecords.cinvcode  \r\n-- from rdrecord   \r\n-- left join rdrecords on rdrecord.id=rdrecords.id  \r\n-- left join PO_Podetails on rdrecords.iPOsID=PO_Podetails.id   \r\n-- left join PO_Pomain on PO_Pomain.POID=PO_Podetails.POID  \r\n-- where  cvouchtype='01' and isnull(rdrecords.iPOsID,0)<>0   \r\n--  and isnull(PO_Podetails.cbcloser,'')='' and isnull(rdrecords.iarrsid,'')='' --订单直接入库的  \r\n--  and PO_Pomain.cBusType<>N'委外加工' and PO_Pomain.cBusType<>N'一般贸易进口'  \r\n-- union  \r\nselect PO_Pomain.cPOID,PO_Podetails.ID as iPOsID,rdrecord.cVenCode,rdrecords.AutoID,  \r\nrdrecords.cBatch,rdrecords.cFree1,rdrecords.cFree2,rdrecords.cFree3,rdrecords.cFree4,  \r\nrdrecords.cFree5,rdrecords.cFree6,rdrecords.cFree7,rdrecords.cFree8,rdrecords.cFree9,  \r\nrdrecords.cFree10,rdrecord.ddate,rdrecords.cinvcode  \r\n--begin 支持问题：201109280132（追加采购订单号参照显示栏目）yangzj 2011.10.09 \r\n,\r\nPO_Pomain.dPODate,            --订单日期\r\nPO_Podetails.iArrQTY,         --累计到货数量\r\nPO_Podetails.iArrNum,         --累计到货件数\r\npu_arrivalvouchs.fValidInQuan,--累计入库数量\r\npu_arrivalvouchs.fValidInNum  --累计入库件数\r\n--end 支持问题：201109280132\r\nfrom rdrecord01 rdrecord \r\nleft join rdrecords01 rdrecords on rdrecord.id=rdrecords.id  \r\nleft join pu_arrivalvouchs on rdrecords.iArrsId =pu_arrivalvouchs.autoid   \r\nleft join PO_Podetails on pu_arrivalvouchs.iposid=PO_Podetails.id  \r\nleft join PO_Pomain on PO_Pomain.POID=PO_Podetails.POID  \r\nwhere  cvouchtype='01' and isnull(PO_Podetails.cbcloser,'')='' and isnull(pu_arrivalvouchs.iposid,0)<>0 --订单到货入库的  \r\n and rdrecord.cbustype<>N'进料加工' and rdrecord.cbustype<>N'委外加工' and rdrecord.cbustype<>N'一般贸易进口'  \r\n--       and PO_Pomain.cBusType<>N'委外加工' and PO_Pomain.cBusType<>N'一般贸易进口'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"QM_Qrefpuordercode"},{"field":"Type","value":"View"}],"columns":[{"id":"column-273638","object_id":"column-273638","name":"cPOID","name_without_path":"cPOID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273639","object_id":"column-273639","name":"iPOsID","name_without_path":"iPOsID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273640","object_id":"column-273640","name":"cVenCode","name_without_path":"cVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273641","object_id":"column-273641","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273642","object_id":"column-273642","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273643","object_id":"column-273643","name":"cFree1","name_without_path":"cFree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273644","object_id":"column-273644","name":"cFree2","name_without_path":"cFree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273645","object_id":"column-273645","name":"cFree3","name_without_path":"cFree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273646","object_id":"column-273646","name":"cFree4","name_without_path":"cFree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273647","object_id":"column-273647","name":"cFree5","name_without_path":"cFree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273648","object_id":"column-273648","name":"cFree6","name_without_path":"cFree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273649","object_id":"column-273649","name":"cFree7","name_without_path":"cFree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273650","object_id":"column-273650","name":"cFree8","name_without_path":"cFree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273651","object_id":"column-273651","name":"cFree9","name_without_path":"cFree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273652","object_id":"column-273652","name":"cFree10","name_without_path":"cFree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273653","object_id":"column-273653","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273654","object_id":"column-273654","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273655","object_id":"column-273655","name":"dPODate","name_without_path":"dPODate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273656","object_id":"column-273656","name":"iArrQTY","name_without_path":"iArrQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273657","object_id":"column-273657","name":"iArrNum","name_without_path":"iArrNum","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273658","object_id":"column-273658","name":"fValidInQuan","name_without_path":"fValidInQuan","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-273659","object_id":"column-273659","name":"fValidInNum","name_without_path":"fValidInNum","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};