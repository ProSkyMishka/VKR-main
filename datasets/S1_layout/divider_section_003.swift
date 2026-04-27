import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds003-secA").font(.headline)
            Text("ds003-itemA").font(.body)
            Divider()
            Text("ds003-secB").font(.headline)
            Text("ds003-itemB").font(.body)
            Divider()
            Text("ds003-secC").font(.headline)
            Text("ds003-itemC").font(.body)
        }
        .padding()
    }
}
