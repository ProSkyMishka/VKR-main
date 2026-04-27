import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds008-secA").font(.headline)
            Text("ds008-itemA").font(.body)
            Divider()
            Text("ds008-secB").font(.headline)
            Text("ds008-itemB").font(.body)
            Divider()
            Text("ds008-secC").font(.headline)
            Text("ds008-itemC").font(.body)
        }
        .padding()
    }
}
