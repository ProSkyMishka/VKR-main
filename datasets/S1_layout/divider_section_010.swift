import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds010-secA").font(.headline)
            Text("ds010-itemA").font(.body)
            Divider()
            Text("ds010-secB").font(.headline)
            Text("ds010-itemB").font(.body)
            Divider()
            Text("ds010-secC").font(.headline)
            Text("ds010-itemC").font(.body)
        }
        .padding()
    }
}
