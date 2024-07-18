window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p3702","name":"SR_PROC_SaveServicItems","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SR_PROC_SaveServicItems"},{"field":"Type","value":"Procedure"}],"script":null,"parameters":[{"name":"Return","description":null,"mode":"INOUT","data_type":"nvarchar(5)","custom_fields":{}},{"name":"sType","description":null,"mode":"IN","data_type":"nvarchar(10)","custom_fields":{}},{"name":"OID","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"VT_ID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"SerBillID","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"cInvCode","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cItemFlag","description":null,"mode":"IN","data_type":"nvarchar(2)","custom_fields":{}},{"name":"cFree1","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cFree2","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cFree3","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cFree4","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cFree5","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cFree6","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cFree7","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cFree8","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cFree9","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cFree10","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"fQuantity","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"cSalesUnitCode","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"fNumber","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"fConversionRate","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mQuotedUnitPrice","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mTaxUnitPrice","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mTaxFreeUnitPrice","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mTaxFreeSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mTaxSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mDiscountSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mTotalSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"fTaxRate","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"fDiscount1","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"fDiscount2","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatTaxFreeUnitPrice","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatTaxFreeSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatTaxSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatTotalSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"mNatDiscountSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"fDrawQuantitySum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"fDrawNumberSum","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"cDefine22","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cDefine23","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cDefine24","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cDefine25","description":null,"mode":"IN","data_type":"nvarchar(120)","custom_fields":{}},{"name":"cDefine26","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"cDefine27","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"cDefine28","description":null,"mode":"IN","data_type":"nvarchar(240)","custom_fields":{}},{"name":"cDefine29","description":null,"mode":"IN","data_type":"nvarchar(240)","custom_fields":{}},{"name":"cDefine30","description":null,"mode":"IN","data_type":"nvarchar(240)","custom_fields":{}},{"name":"cDefine31","description":null,"mode":"IN","data_type":"nvarchar(240)","custom_fields":{}},{"name":"cDefine32","description":null,"mode":"IN","data_type":"nvarchar(240)","custom_fields":{}},{"name":"cDefine33","description":null,"mode":"IN","data_type":"nvarchar(240)","custom_fields":{}},{"name":"cDefine34","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"cDefine35","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"cDefine36","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cDefine37","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"dCreatedDate","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"cCreator","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"cModifier","description":null,"mode":"IN","data_type":"nvarchar(40)","custom_fields":{}},{"name":"dModifiedDate","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"SerBodyOID","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"bRepair","description":null,"mode":"IN","data_type":"nvarchar(4)","custom_fields":{}},{"name":"citem_class","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"citem_cname","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"citemcode","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"citemname","description":null,"mode":"IN","data_type":"nvarchar(80)","custom_fields":{}},{"name":"AllocateId","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"MoDId","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"ReturnError","description":null,"mode":"INOUT","data_type":"nvarchar(5)","custom_fields":{}},{"name":"cTypeClass","description":null,"mode":"IN","data_type":"nvarchar(4)","custom_fields":{}},{"name":"cInvAddCode","description":null,"mode":"IN","data_type":"nvarchar(255)","custom_fields":{}},{"name":"cSubSysBarCode","description":null,"mode":"IN","data_type":"nvarchar(100)","custom_fields":{}}],"dependencies":null,"imported_at":"2024-07-15 13:47"};