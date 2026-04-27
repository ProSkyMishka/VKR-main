import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds013-secA").font(.headline)
            Text("ds013-itemA").font(.body)
            Divider()
            Text("ds013-secB").font(.headline)
            Text("ds013-itemB").font(.body)
            Divider()
            Text("ds013-secC").font(.headline)
            Text("ds013-itemC").font(.body)
        }
        .padding()
    }
}
