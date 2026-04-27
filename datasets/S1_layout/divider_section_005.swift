import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds005-secA").font(.headline)
            Text("ds005-itemA").font(.body)
            Divider()
            Text("ds005-secB").font(.headline)
            Text("ds005-itemB").font(.body)
            Divider()
            Text("ds005-secC").font(.headline)
            Text("ds005-itemC").font(.body)
        }
        .padding()
    }
}
