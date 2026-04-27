import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds015-secA").font(.headline)
            Text("ds015-itemA").font(.body)
            Divider()
            Text("ds015-secB").font(.headline)
            Text("ds015-itemB").font(.body)
            Divider()
            Text("ds015-secC").font(.headline)
            Text("ds015-itemC").font(.body)
        }
        .padding()
    }
}
