import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds001-secA").font(.headline)
            Text("ds001-itemA").font(.body)
            Divider()
            Text("ds001-secB").font(.headline)
            Text("ds001-itemB").font(.body)
            Divider()
            Text("ds001-secC").font(.headline)
            Text("ds001-itemC").font(.body)
        }
        .padding()
    }
}
