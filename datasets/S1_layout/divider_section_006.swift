import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds006-secA").font(.headline)
            Text("ds006-itemA").font(.body)
            Divider()
            Text("ds006-secB").font(.headline)
            Text("ds006-itemB").font(.body)
            Divider()
            Text("ds006-secC").font(.headline)
            Text("ds006-itemC").font(.body)
        }
        .padding()
    }
}
