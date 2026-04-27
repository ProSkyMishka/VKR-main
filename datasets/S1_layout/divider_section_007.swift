import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds007-secA").font(.headline)
            Text("ds007-itemA").font(.body)
            Divider()
            Text("ds007-secB").font(.headline)
            Text("ds007-itemB").font(.body)
            Divider()
            Text("ds007-secC").font(.headline)
            Text("ds007-itemC").font(.body)
        }
        .padding()
    }
}
