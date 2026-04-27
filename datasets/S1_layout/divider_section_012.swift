import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds012-secA").font(.headline)
            Text("ds012-itemA").font(.body)
            Divider()
            Text("ds012-secB").font(.headline)
            Text("ds012-itemB").font(.body)
            Divider()
            Text("ds012-secC").font(.headline)
            Text("ds012-itemC").font(.body)
        }
        .padding()
    }
}
