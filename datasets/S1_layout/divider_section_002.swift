import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds002-secA").font(.headline)
            Text("ds002-itemA").font(.body)
            Divider()
            Text("ds002-secB").font(.headline)
            Text("ds002-itemB").font(.body)
            Divider()
            Text("ds002-secC").font(.headline)
            Text("ds002-itemC").font(.body)
        }
        .padding()
    }
}
