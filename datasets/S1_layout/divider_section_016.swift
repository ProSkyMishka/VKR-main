import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds016-secA").font(.headline)
            Text("ds016-itemA").font(.body)
            Divider()
            Text("ds016-secB").font(.headline)
            Text("ds016-itemB").font(.body)
            Divider()
            Text("ds016-secC").font(.headline)
            Text("ds016-itemC").font(.body)
        }
        .padding()
    }
}
