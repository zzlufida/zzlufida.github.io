window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10301","name":"CM_QStageExecute","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE View [dbo].[CM_QStageExecute]\r\nas \r\n \r\n\r\nSelect Distinct  C.strContractID as cContractID,G.cStageCode,G.cStageName,V.decCount,V.decRateMoney from VWContractALl C\r\nleft join cm_stagegroupdetail S on c.cstagegroupcode=s.cgroupcode \r\nleft join cm_stage G on S.cstagecode=G.cstagecode\r\nleft join \r\n(\r\nSelect E.cContractID,S.cStageCode,S.cStageName,Sum(decCount) as decCount,Sum(decRateMoney) as decRateMoney from CM_ExecuteBill E\r\ninner join CM_ExecuteBills EB on E.cExecID = EB.cExecID\r\ninner join CM_Stage S On E.cStageCode = S.cStageCode\r\nGroup by E.cContractID,S.cStageCode,S.cStageName\r\n) V on C.strContractID = V.cContractID and V.cStageCode = G.cStageCode\r\nwhere C.bUseStage = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CM_QStageExecute"},{"field":"Type","value":"View"}],"columns":[{"id":"column-183389","object_id":"column-183389","name":"cContractID","name_without_path":"cContractID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183390","object_id":"column-183390","name":"cStageCode","name_without_path":"cStageCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183391","object_id":"column-183391","name":"cStageName","name_without_path":"cStageName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183392","object_id":"column-183392","name":"decCount","name_without_path":"decCount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-183393","object_id":"column-183393","name":"decRateMoney","name_without_path":"decRateMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};