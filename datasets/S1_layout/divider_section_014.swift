import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds014-secA").font(.headline)
            Text("ds014-itemA").font(.body)
            Divider()
            Text("ds014-secB").font(.headline)
            Text("ds014-itemB").font(.body)
            Divider()
            Text("ds014-secC").font(.headline)
            Text("ds014-itemC").font(.body)
        }
        .padding()
    }
}
